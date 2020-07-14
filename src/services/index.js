export function likeFood({ food, userId, like }) {
  return (dispatch, getState, getFirebase) => getFirebase()
    .ref(`Favourites/${userId}`)
    .update({
      [food.key]: like ? { isLiked: true } : null,
    })
    .then(() => {
      dispatch(updateTotalLikeFood({ food, like }));
    })
    .catch(() => alert('err'));
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
