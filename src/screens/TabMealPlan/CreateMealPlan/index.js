import React, { useState, useEffect, memo } from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { addPlan, updatePlan } from 'services';

import { useFirebase } from 'react-redux-firebase';

import Header from 'components/Header';
import Button from 'components/Button';
import images from 'assets/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Progress from './components/Progress';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

import styles from './styles';

const STEP = {
  one: 1,
  two: 2,
};

const CreateMealPlan = ({ navigation }) => {
  const dispatch = useDispatch();
  const [plan, setPlan] = useState({
    title: '',
    date: new Date(),
    food: [],
    meal: 'breakfast',
    note: '',
  });

  const [step, setStep] = useState(STEP.one);

  const { id: planId } = navigation.state.params || {};

  const firebase = useFirebase();
  const user = firebase.auth().currentUser;

  const oldPlan = useSelector(
    ({
      firebase: {
        data: { Meal_Plan = {} },
      },
    }) => Meal_Plan[user.uid]?.[planId] || {},
  );

  const [error, setError] = useState({});

  useEffect(() => {
    if (planId) {
      setPlan(oldPlan);
    }
  }, [planId]);

  const onValidateInput = () => {
    const err = { ...error };
    if (!plan.title) {
      err.title = 'Please enter title of the plan';
    }
    return err;
  };

  const onSubmit = () => {
    const err = onValidateInput();
    if (Object.values(err).filter(item => item !== '').length) {
      setError(err);
      return;
    }

    const data = {
      ...plan,
      userId: user.uid,
    };

    if (planId) {
      dispatch(updatePlan({ data, userId: user.uid, planId })).then(() => {
        navigation.goBack();
      });
    } else {
      dispatch(addPlan({ data, userId: user.uid })).then(() => {
        navigation.goBack();
      });
    }
  };

  const onChangeText = _.debounce((key, text) => {
    if (error[key]?.length) {
      const err = { ...error };
      err[key] = '';
      setError(err);
    }

    const newPlan = { ...plan };
    newPlan[key] = text;
    setPlan(newPlan);
  }, 500);

  const goBack = () => {
    if (step === 1) {
      return navigation.goBack();
    }

    setStep(step - 1);
  };

  const onNext = () => {
    if (step === STEP.two) {
      return onSubmit();
    }

    setStep(step + 1);
  };

  const onSelectFood = list => {
    setPlan({ ...plan, food: list });
  };

  const onSelectType = type => {
    if (type == null) {
      return;
    }
    setPlan({ ...plan, meal: type });
  };

  const onSelectDate = date => {
    setPlan({ ...plan, date: date.getTime() });
  };

  const disabledButton = (step === STEP.one && !plan?.title?.length)
    || (step === STEP.two && !plan?.food?.length);

  return (
    <View style={styles.main}>
      <Header
        iconLeft={images.icon_back}
        onPressLeft={goBack}
        title={planId ? 'Edit Plan' : 'Create a plan'}
      />
      <ScrollView style={styles.container}>
        <Progress totalStep={2} currentStep={step} />
        <View style={{ height: 20 }} />
        <KeyboardAwareScrollView>
          <StepOne
            isVisible={step === STEP.one}
            plan={plan}
            onChangeText={onChangeText}
          />
          <StepTwo
            isVisible={step === STEP.two}
            plan={plan}
            onSelectDate={onSelectDate}
            onSelectFood={onSelectFood}
            onSelectType={onSelectType}
          />
        </KeyboardAwareScrollView>
      </ScrollView>
      <Button
        buttonStyle={styles.btnCreate}
        title={step === STEP.two ? 'CONFIRM' : 'NEXT'}
        disabled={disabledButton}
        onPress={onNext}
      />
    </View>
  );
};

export default memo(CreateMealPlan);
