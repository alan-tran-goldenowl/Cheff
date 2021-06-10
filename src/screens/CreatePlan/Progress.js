import React, { memo } from 'react'

import { View, StyleSheet } from 'react-native'
import { COLOR } from 'styles/theme'

const Progress = ({ totalStep, currentStep }) => (
  <View style={styles.container}>
    {Array.from('x'.repeat(totalStep)).map((_, index) => (
      <View
        key={index.toString()}
        style={[
          styles.circle,
          {
            backgroundColor:
              currentStep === index + 1
                ? COLOR.GREEN_COLOR
                : COLOR.BORDER_COLOR,
          },
        ]}
      />
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
})

export default memo(Progress)
