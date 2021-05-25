import React, { useState, useEffect, memo } from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
  addPlan, updatePlan, addPlanTodo, updatePlanTodo,
} from 'services';

import { useFirebase } from 'react-redux-firebase';

import Header from 'components/Header';
import Button from 'components/Button';
import images from 'assets/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Progress from './components/Progress';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

import styles from './styles';

const STEP = {
  one: 1,
  two: 2,
  three: 3,
};

const CreateMealPlan = ({ navigation }) => {
  const dispatch = useDispatch();
  const [plan, setPlan] = useState({
    title: '',
    date: new Date().getTime(),
    food: [],
    meal: 'buasang',
    note: '',
  });

  const [planToBuy, setPlanToBuy] = useState([]);

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

  const oldPlanToBuy = useSelector(
    ({
      firebase: {
        data: { Plan_To_do = {} },
      },
    }) => Plan_To_do[user.uid]?.[oldPlan?.idWhatToBuy] || {},
  );

  const [error, setError] = useState({});

  useEffect(() => {
    if (planId) {
      setPlan(oldPlan);
      setPlanToBuy(oldPlanToBuy.todos);
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

    const dataWhatToBuy = {
      title: plan.title,
      notes: plan.note,
      date: plan.date,
      todos: planToBuy.map(item => ({ ...item, text: `${item.name}-${item.amount}-${item.unit}` })),
    };

    if (planId) {
      dispatch(updatePlan({ data, userId: user.uid, planId })).then(() => {
        dispatch(updatePlanTodo({ data: dataWhatToBuy, userId: user.uid, planId: plan.idWhatToBuy }));
        navigation.goBack();
      });
    } else {
      dispatch(addPlan({ data, userId: user.uid })).then(rs1 => {
        const idPlan = rs1?.toString()?.split('/')?.pop();

        dispatch(addPlanTodo({ data: dataWhatToBuy, userId: user.uid })).then(rs => {
          const idWhatToBuy = rs?.toString()?.split('/')?.pop();

          dispatch(updatePlan({ data: { ...data, idWhatToBuy }, userId: user.uid, planId: idPlan }));
          navigation.goBack();
        });
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
    if (step === STEP.three) {
      return onSubmit();
    }

    if (step === STEP.two) {
      const newList = {};
      plan.food.forEach(item => {
        item?.value?.ingredients?.forEach(itemIngre => {
          const key = itemIngre.name.toLowerCase().replaceAll(' ', '');
          let { amount } = itemIngre;
          if (newList[key]?.amount) {
            amount += newList[key]?.amount;
          }
          newList[key] = {
            id: key,
            ...itemIngre,
            amount,
          };
        });
      });
      setPlanToBuy(Object.values(newList));
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
        title={planId ? 'Sửa  ' : 'Tạo mới'}
      />
      <ScrollView style={styles.container}>
        <Progress totalStep={3} currentStep={step} />
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
          <StepThree
            isVisible={step === STEP.three}
            setPlanToBuy={setPlanToBuy}
            planToBuy={planToBuy}
          />
        </KeyboardAwareScrollView>
      </ScrollView>
      <Button
        buttonStyle={styles.btnCreate}
        title={step === STEP.three ? 'XÁC NHẬN' : 'TIẾP THEO'}
        disabled={disabledButton}
        onPress={onNext}
      />
    </View>
  );
};

export default memo(CreateMealPlan);
