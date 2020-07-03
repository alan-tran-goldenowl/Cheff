import lodash from 'lodash';
import { FireBase } from 'constants';
import {
  GET_FOOD_BY_TYPE_FAILURE,
  GET_FOOD_BY_TYPE_SUCCESS,
  SEARCH_FOOD_SUCCESS,
} from './constants';

const foodRef = FireBase.database().ref('Food/');

export const onGetFoodByTypeSuccess = (payload, typeId) => ({ type: GET_FOOD_BY_TYPE_SUCCESS, payload, typeId });
export const onGetFoodByTypeFailure = (error) => ({ type: GET_FOOD_BY_TYPE_FAILURE, error });
export const onGetFoodByType = (typeId) => (dispatch) => {
  foodRef.orderByChild('type')
  .equalTo(typeId)
  .once('value')
  .then(value => dispatch(onGetFoodByTypeSuccess(value.val(), typeId)))
  .catch(error => dispatch(onGetFoodByTypeFailure(error)))
}

export const onSearchFoodSuccess = (payload) => ({ type: SEARCH_FOOD_SUCCESS, payload });
export const onSearchFood = (search) => async (dispatch) => {
  foodRef.orderByChild('name')
  .startAt(search)
  .endAt(search+"\uf8ff")
  .once('value', (value) => dispatch(onSearchFoodSuccess(value.val() || {})));
}
