export function addFavourite({ food, userId }) {
  return (dispatch, getState, getFirebase) => {
    let listFavourites = food.value.listFavourites || [];
    const isLiked = listFavourites.findIndex(item => item === userId);
    if (isLiked === -1) {
      listFavourites.push(userId);
    } else {
      listFavourites = listFavourites.filter(item => item !== userId);
    }
    return getFirebase()
      .ref(`Food/${food.key}`)
      .update({ listFavourites })
      .then(() => {
        // alert('scucessssss');
      });
  };
}
