import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsive } from 'utils';
import themeStyles from 'styles/theme';

const ContainerInput = ({
  label, error, containerStyle, children,
}) => (
  <View style={[style.container, containerStyle]}>
    {label ? <Text style={style.label}>{label}</Text> : null}
    {children}
    {error ? <Text style={style.errorText}>{error}</Text> : null}
  </View>
);

export default ContainerInput;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  label: {
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_SMALL }),
  },
});
