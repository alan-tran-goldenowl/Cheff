import React, {
  memo, useEffect, useState, useRef,
} from 'react';
import {
  View,
  Image,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import images from 'assets/images';

import styles from './styles';

if (
  Platform.OS === 'android'
    && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}


const CollapseView = ({
  isCollapse, onExpand, onCollapse, children,
}) => {
  const viewRef = useRef(null);

  const [state, setState] = useState({ height: 0, isCollapse: isCollapse || false });

  const expand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    viewRef.current?.setNativeProps({
      style: {
        height: state.height,
      },
    });
    setState({ ...state, isCollapse: false });
    onExpand && onExpand();
  };

  const collapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    viewRef?.current?.setNativeProps({
      style: {
        height: state.height * 0.3,
      },
    });
    setState({ ...state, isCollapse: true });
    onCollapse && onCollapse();
  };

  return (
    <>
      <View
        ref={viewRef}
        style={{ flex: 1, overflow: 'hidden' }}
        onLayout={event => {
          const { height } = event.nativeEvent.layout;
          if (state.height === 0) {
            setState({ ...state, height });
          }
        }}
      >
        {children}
        {state.isCollapse && (
          <LinearGradient
            colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.6)']}
            style={styles.linearGradient}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          setState({ ...state, isCollapse: !state.isCollapse });
          state.isCollapse ? expand() : collapse();
        }}
      >
        <Image
          style={styles.iconUpDown}
          resizeMode="contain"
          source={
            state.isCollapse
              ? images.ic_pulldown
              : images.ic_pullup
        }
        />
      </TouchableOpacity>
    </>
  );
};

export default memo(CollapseView);
