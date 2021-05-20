export function likeFood({ food, userId, like }) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Favourites/${userId}`)
    .update({
      [food.key]: like ? { isLiked: true } : null,
    })
    .then(() => {
      dispatch(updateTotalLikeFood({ food, like }));
    });
}

export function updateTotalLikeFood({ food, like }) {
  let countLikes = food.value?.totalLikes || 0;
  countLikes = like ? countLikes + 1 : countLikes - 1;
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Food/${food.key}/`)
    .update({ totalLikes: countLikes > -1 ? countLikes : 0 });
}

export function addNewActivity(params) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Activity/${params.userId}`)
    .push({ ...params, timeStamp: Date.now() / 1000 });
}

export function addPlan({ data, userId }) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Meal_Plan/${userId}`)
    .push(data);
}

export function updatePlan({ data, userId, planId }) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Meal_Plan/${userId}/${planId}`)
    .update(data);
}

export function addPlanTodo({ data, userId }) {
  return (dispatch, getState, getFirebase) => getFirebase().ref(`Plan_To_do/${userId}`).push(data);
}

export function updatePlanTodo({ data, userId, planId }) {
  return (dispatch, getState, getFirebase) => getFirebase().ref(`Plan_To_do/${userId}/${planId}`).update(data);
}

export function deletePlan({ userId, planId }) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    return firebase.ref(`Meal_Plan/${userId}/${planId}`).remove();
  };
}

export function deletePlanToBuy({ userId, planId }) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    return firebase.ref(`Plan_To_do/${userId}/${planId}`).remove();
  };
}
