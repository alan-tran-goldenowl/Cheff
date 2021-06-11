import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { COLOR } from 'styles/theme'
import { addPlan, updatePlan, addPlanTodo } from 'services'
import { useFirebase } from 'react-redux-firebase'
import Progress from './Progress'
import { StepOne, StepTwo, StepThree } from './StepView'

const initData = {
  title: '',
  note: '',
}

const Body = ({ navigation }) => {
  const dispatch = useDispatch()
  const [step, setStep] = useState(1)
  const [data, setData] = useState(initData)

  const firebase = useFirebase()
  const user = firebase.auth().currentUser

  const goNextStep = values => {
    if (Object.keys(values).length) {
      if (step < 3) {
        setData(prevData => ({ ...prevData, ...values }))
        setStep(prevStep => prevStep + 1)
      } else {
        handleSubmitData({ ...data, ...values })
      }
    }
  }

  const handleSubmitData = values => {
    dispatch(addPlan({ values, userId: user.uid })).then(rs1 => {
      const idPlan = rs1?.toString()?.split('/')?.pop()
      const { planToBuy } = values
      const dataWhatToBuy = {
        date: values.date,
        notes: values.note,
        title: values.title,
        todos: (planToBuy ?? []).map(item => ({ ...item, isCompleted: false })),
      }
      dispatch(addPlanTodo({ data: dataWhatToBuy, userId: user.uid })).then(rs => {
        const idWhatToBuy = rs?.toString()?.split('/')?.pop()

        dispatch(
          updatePlan({
            data: { ...values, idWhatToBuy },
            userId: user.uid,
            planId: idPlan,
          }),
        )
        navigation.goBack()
      })
    })
  }

  const renderContent = () => {
    switch (step) {
      case 1:
        return <StepOne onNextStep={goNextStep} />
      case 2:
        return <StepTwo onNextStep={goNextStep} />
      case 3:
        return <StepThree onNextStep={goNextStep} listFood={data.listFood} />
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <Progress totalStep={3} currentStep={step} />
        {renderContent()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE_COLOR,
    borderWidth: 1,
    borderColor: COLOR.LIGHT_GRAY_COLOR,
  },
  progress: {
    padding: 10,
  },
})

export default Body
