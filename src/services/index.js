import { ActivityConstant } from 'constants';

const {
  LIKE,
  UNLIKE,
} = ActivityConstant;

export function likeFood({ food, userId, like }) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Favourites/${userId}`)
    .update({
      [food.key]: like ? { isLiked: true } : null,
    })
    .then(() => {
      dispatch(updateTotalLikeFood({ food, like }));
      dispatch(addNewActivity({
        key: food.key,
        name: food.value.name,
        userId,
        action: like ? LIKE : UNLIKE,
      }));
    })
    .catch(e => alert(e));
}

export function updateTotalLikeFood({ food, like }) {
  let countLikes = food.value?.totalLikes || 0;
  countLikes = like ? countLikes + 1 : countLikes - 1;
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Food/${food.key}/`)
    .update({ totalLikes: countLikes })
    .then(() => {
    });
}

export function addNewActivity(params) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Activity/${params.userId}`)
    .push({ ...params, timeStamp: Date.now() / 1000 })
    .then(() => {

    })
    .catch(() => alert('err2'));
}

export function addPlan({ data, userId, callback }) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Meal_Plan/${userId}`)
    .push(data)
    .then(rs => {
      const key = rs.toString().split('/').pop(); // get key of plan after created
      const paramsActivity = {
        key,
        name: data.title,
        userId,
        action: ActivityConstant.CREATE_PLAN,
      };
      dispatch(addNewActivity(paramsActivity));
      callback && callback();
    })
    .catch(() => alert('err2'));
}


export function updatePlan({
  data, userId, callback, planId,
}) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Meal_Plan/${userId}/${planId}`)
    .update(data)
    .then(() => {
      const paramsActivity = {
        key: planId,
        name: data.title,
        userId,
        action: ActivityConstant.EDIT_PLAN,
      };
      dispatch(addNewActivity(paramsActivity));
      callback && callback();
    })
    .catch(() => alert('err2'));
}


export function deletePlan({ userId, planId, callback }) {
  return (dispatch, getState, getFirebase) => {
    const data = getState().firebase.data.Activity[userId];

    const keys = Object.values(data).reduce((temp, item, index) => {
      if (item.key === planId) temp.push(Object.keys(data)[index]);
      return temp;
    }, []);
    const firebase = getFirebase();
    return firebase
      .ref(`Meal_Plan/${userId}/${planId}`)
      .remove()
      .then(() => {
        keys.map((item, index) => firebase.remove(`Activity/${userId}/${keys[index]}`));
        callback && callback();
      })
      .catch(() => alert('err2'));
  };
}
