import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR } from 'styles/theme';

const ProgressBar = props => {
  const { bgcolor, completed } = props;


  return (
    <View style={styles.containerStyles}>
      <View style={[styles.fillerStyles, { width: `${completed}%`, backgroundColor: bgcolor ?? COLOR.GREEN_COLOR }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    height: 5,
    backgroundColor: '#e0e0de',
    borderRadius: 20,
    justifyContent: 'flex-start',
  },

  fillerStyles: {
    height: '100%',
    width: '100%',
    borderRadius: 20,

  },

});

export default ProgressBar;
