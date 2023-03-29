import React, {useState, useMemo, useCallback} from 'react';
import {Text, View, FlatList, TouchableOpacity, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useFirebase, useFirebaseConnect} from 'react-redux-firebase';
import moment from 'moment';
import images from 'assets/images';
import Header from 'components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

import {deletePlan, deletePlanToBuy} from 'services';
import styles from './styles';
import Row from './components/Row';
import ItemMeal from './components/ItemMeal';

const PlanDetails = ({navigation}) => {
  const {id: planId} = navigation.state.params || {};

  const [isShowFoods, setShowFood] = useState(false);

  const dispatch = useDispatch();

  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect([`Meal_Plan/${user.uid}/${planId}`, 'Food', 'Type_Food']);

  const mealPlan = useSelector(
    ({
      firebase: {
        data: {Meal_Plan = {}},
      },
    }) => Meal_Plan[user.uid]?.[planId] || {},
  );

  const mealType = useSelector(
    ({
      firebase: {
        data: {Type_Food = {}},
      },
    }) => Type_Food[mealPlan?.meal],
  );

  const goBack = useCallback(() => navigation.goBack(), []);

  const goEdit = useCallback(() => {
    navigation.navigate('CreatePlan', {id: planId});
  }, []);

  const renderHeader = useCallback(
    () => (
      <Header
        onPressLeft={goBack}
        iconLeft={images.icon_back}
        customRight={() => (
          <TouchableOpacity onPress={goEdit} style={styles.editButton}>
            <Text style={styles.editText}>Sửa</Text>
          </TouchableOpacity>
        )}
        onPressRight={goEdit}
        title="Chi tiết"
      />
    ),
    [],
  );

  const data = useMemo(
    () => ({
      title: mealPlan.title,
      date: moment(mealPlan.date).format('HH:MM / DD-MMM'),
      meal: mealType?.name,
      textFood: `${mealPlan?.food?.length} ${
        mealPlan?.food?.length > 1 ? 'dishes' : 'dish'
      }`,
      food: mealPlan?.food,
      note: mealPlan?.note,
    }),
    [mealPlan],
  );

  const toggleFood = () => setShowFood(!isShowFoods);

  const onDelete = () => {
    Alert.alert('Nhắc nhở', 'Bạn muốn thực sự muốn xóa ? ', [
      {
        text: 'Cancel',
        style: 'Bỏ',
      },
      {
        text: 'Xóa',
        onPress: () => {
          const {idWhatToBuy} = mealPlan;
          dispatch(
            deletePlan({
              userId: user.uid,
              planId,
            }),
          ).then(() => {
            dispatch(
              deletePlanToBuy({
                userId: user.uid,
                planId: idWhatToBuy,
              }),
            );
            navigation.goBack();
          });
        },
      },
    ]);
  };

  const goToFoodDetail = foodId => {
    navigation.navigate('FoodDetail', {key: foodId});
  };

  const goToPlanToBuyDetail = () => {
    navigation.navigate('TodoPlanDetail', {id: mealPlan.idWhatToBuy});
  };

  return mealPlan ? (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.backgroundWhite}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{data.title}</Text>
        </View>
        <View style={styles.inner}>
          <Row
            title="Thời gian tạo"
            rightComponent={() => (
              <Text style={styles.boldText}>{data.date}</Text>
            )}
          />
          <Row
            title="Loại"
            rightComponent={() => (
              <Text style={styles.boldText}>{data.meal}</Text>
            )}
          />
          <Row
            title="Món ăn"
            rightComponent={() => (
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={toggleFood}>
                <Text style={styles.boldText}>{data.textFood}</Text>
                <Icon
                  name={isShowFoods ? 'chevron-up' : 'chevron-down'}
                  size={20}
                />
              </TouchableOpacity>
            )}>
            <FlatList
              data={isShowFoods ? mealPlan.food : []}
              renderItem={({item}) => (
                <ItemMeal
                  item={item.value}
                  onPressItem={() => {
                    goToFoodDetail(item.key);
                  }}
                  isSelected
                />
              )}
              keyExtractor={item => String(item.key)}
            />
          </Row>
          <Row title="Ghi chú">
            <Text style={styles.blurText}>{data.note}</Text>
          </Row>

          <Row
            onPress={goToPlanToBuyDetail}
            title="Xem danh sách nguyên liệu"
            rightComponent={() => <Icon name="arrow-forward-sharp" size={20} />}
            customStyle={{borderBottomWidth: 0, justifyContent: 'center'}}
            customTitleStyle={{fontWeight: '500'}}
          />
        </View>
      </View>

      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Xóa</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};

export default PlanDetails;
