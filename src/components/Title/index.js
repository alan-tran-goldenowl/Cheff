import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
})

export default Title
