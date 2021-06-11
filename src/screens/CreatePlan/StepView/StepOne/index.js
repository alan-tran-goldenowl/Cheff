import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from 'components/Button'
import ContainerInput from 'components/ContainerInput'
import { WORDS } from 'utils/constants'
import styles from './styles'

const StepOne = ({ onNextStep }) => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const goStepTwo = () => onNextStep({ title, note })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{WORDS.INFORMATION}</Text>

      <ContainerInput label={WORDS.TITLE}>
        <TextInput multiline onChangeText={setTitle} style={styles.input} placeholder={WORDS.INPUT_PLACEHOLDER} />
      </ContainerInput>

      <ContainerInput label={WORDS.NOTE} containerStyle={{ borderWidth: 0 }}>
        <TextInput multiline numberOfLines={10} onChangeText={setNote} style={styles.note} placeholder={WORDS.INPUT_PLACEHOLDER} />
      </ContainerInput>
      <Button title={WORDS.CONFIRM} disabled={!title} onPress={goStepTwo} />
    </View>
  )
}

export default StepOne
