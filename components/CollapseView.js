import React, { PureComponent } from 'react';
import {
  View,
  Image,
  UIManager,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { responsive } from '../utils';

UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

const styles = StyleSheet.create({
  linearGradient: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    height: responsive({ h: 70 }),
  },
  iconUpDown: {
    width: responsive({ h: 10 }),
    height: responsive({ h: 10 }),
  },
  iconView: {
    alignItems: 'center',
    borderBottomWidth: 0.7,
    justifyContent: 'center',
    paddingVertical: responsive({ d: 10 }),
    borderBottomColor: 'rgb(217,217,217)',
  },
});

export default class CollapseView extends PureComponent {
  constructor(props) {
    super(props);
    this.panResponder = null;
    this.viewStyle = {
      style: {
        marginBottom: 0,
        height: '100%',
      },
    };
    this.state = {
      height: 0,
      isCollapse: props.isCollapse || false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const isCollapse = this.props.isCollapse || false;
      isCollapse && this.collapse();
    }, 70);
  }

  expand = () => {
    const { onExpand } = this.props;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.viewRef.setNativeProps({
      style: {
        height: this.state.height,
      },
    });
    this.setState({ isCollapse: false });
    onExpand && onExpand();
  };

  collapse = () => {
    const { onCollapse } = this.props;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.viewRef.setNativeProps({
      style: {
        height: this.state.height - this.state.height * 0.3,
      },
    });
    this.setState({ isCollapse: true });
    onCollapse && onCollapse();
  };

  render() {
    const { isCollapse } = this.state;
    return (
      <View
        ref={(ref) => {
          this.viewRef = ref;
        }}
        style={{ flex: 1 }}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          if (this.state.height === 0) {
            this.setState({ height });
          }
        }}
      >
        {this.props.children}
        {isCollapse && (
          <LinearGradient
            colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.6)']}
            style={styles.linearGradient}
          />
        )}
        <TouchableOpacity
          style={styles.iconView}
          onPress={() => {
            this.setState({ isCollapse: !isCollapse });
            isCollapse ? this.expand() : this.collapse();
          }}
        >
          <Image
            style={styles.iconUpDown}
            resizeMode="contain"
            source={
              isCollapse
                ? require('../assets/images/ic_pulldown.png')
                : require('../assets/images/ic_pullup.png')
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
}
