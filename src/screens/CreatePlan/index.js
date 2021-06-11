import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from 'components/Header'
import Images from 'assets/images'
import Body from './Body'

const CreatePLanV2 = ({ navigation }) => {
  const { id: planId } = navigation.state.params || {}

  return (
    <View style={styles.container}>
      <Header
        iconLeft={Images.icon_back}
        onPressLeft={() => navigation.goBack()}
        title={planId ? 'Sửa  ' : 'Tạo mới'}
      />
      <Body navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default CreatePLanV2
