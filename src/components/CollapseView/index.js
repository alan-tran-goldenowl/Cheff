import React, {
  memo, useState, useRef,
} from 'react';
import {
  View,
  Image,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import images from 'assets/images';
import { isIOS } from 'utils';

import styles from './styles';

if (
  !isIOS
    && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}


const CollapseView = ({
  onExpand, onCollapse, children,
}) => {
  const viewRef = useRef(null);

  const [height, setHeight] = useState(0);
  const [isCollapse, setIsCollapse] = useState(false);

  const expand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    viewRef.current?.setNativeProps({
      style: {
        height,
      },
    });
    setIsCollapse(false);
    onExpand && onExpand();
  };

  const collapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    viewRef?.current?.setNativeProps({
      style: {
        height: height * 0.3,
      },
    });
    setIsCollapse(true);
    onCollapse && onCollapse();
  };

  return (
    <>
      <View
        ref={viewRef}
        style={{ flex: 1, overflow: 'hidden' }}
        onLayout={event => {
          const { height: heightView } = event.nativeEvent.layout;
          if (height === 0) {
            setHeight(heightView);
          }
        }}
      >
        {children}
        {isCollapse && (
          <LinearGradient
            colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.6)']}
            style={styles.linearGradient}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          isCollapse ? expand() : collapse();
        }}
      >
        <Image
          style={styles.iconUpDown}
          resizeMode="contain"
          source={
            isCollapse
              ? images.ic_pulldown
              : images.ic_pullup
        }
        />
      </TouchableOpacity>
    </>
  );
};

export default memo(CollapseView);
