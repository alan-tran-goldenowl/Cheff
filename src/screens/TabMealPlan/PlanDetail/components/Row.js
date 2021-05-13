import React, { memo } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { COLOR } from 'styles/theme';

const Row = ({
  title, rightComponent, customStyle, children,
}) => (
  <View style={[styles.container, customStyle]}>
    <View style={styles.row}>
      <Text>{title}</Text>
      {rightComponent ? rightComponent() : null}
    </View>

    {children}
  </View>
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
