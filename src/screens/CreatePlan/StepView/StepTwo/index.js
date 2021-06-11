import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { CURRENT_DATE } from 'utils/date'
import Button from 'components/Button'
import { WORDS } from 'utils/constants'
import DatePicker from './DatePicker'
import styles from './styles'
import MealPlan from './MealPlan'

const StepTwo = ({ onNextStep }) => {
  const [date, setDate] = useState(CURRENT_DATE)

  const [listSelected, setListSelected] = useState([])
  const [selectedType, setSelectedType] = useState(null)

  const handleSelectDate = newDate => setDate(newDate)

  return (
    <ScrollView style={styles.container}>
      <DatePicker date={date} onSelectDate={handleSelectDate} />

      <MealPlan selectedType={selectedType} setSelectedType={setSelectedType} listSelected={listSelected} setListSelected={setListSelected} />

      <Button
        title={WORDS.CONFIRM}
        buttonStyle={{ marginTop: 10 }}
        onPress={() => onNextStep({
          date,
          type: selectedType,
          listFood: listSelected,
        })}
      />
    </ScrollView>
  )
}

export default StepTwo
