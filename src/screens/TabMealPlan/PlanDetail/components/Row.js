import React, { memo } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { COLOR } from 'styles/theme';

const Row = ({
  title,
  rightComponent,
  customStyle,
  children,
  onPress,
  customTitleStyle,
}) => (
  <TouchableOpacity
    style={[styles.container, customStyle]}
    onPress={onPress}
    activeOpacity={1}
  >
    <View style={styles.row}>
      <Text style={customTitleStyle}>{title}</Text>
      {rightComponent ? rightComponent() : null}
    </View>

    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.25,
    paddingVertical: 15,
    borderBottomColor: COLOR.BORDER_COLOR,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  title: {
    fontSize: 16,
    color: COLOR.TEXT_SECONDARY_COLOR,
  },
});

export default memo(Row);
