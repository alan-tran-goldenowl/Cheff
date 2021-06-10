import React from 'react'
import { View } from 'react-native'
import { COLOR } from 'styles/theme'

const ItemSeparator = () => (
  <View
    style={{
      borderBottomColor: COLOR.LIGHT_GRAY_COLOR,
      borderBottomWidth: 0.3,
    }}
  />
)

export default ItemSeparator
