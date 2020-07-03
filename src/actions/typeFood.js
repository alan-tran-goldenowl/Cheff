import { FireBase } from 'constants';
import {
  GET_ALL_TYPE_FOOD_FAILURE,
  GET_ALL_TYPE_FOOD_REQUEST,
  GET_ALL_TYPE_FOOD_SUCCESS,
 } from './constants';

 const typeFoodRef = FireBase.database().ref('Type_Food/');

export const onGetAllTypeFoodSuccess = (payload) => ({ type: GET_ALL_TYPE_FOOD_SUCCESS, payload });
export const onGetAllTypeFoodFailure = (error) => ({ type: GET_ALL_TYPE_FOOD_REQUEST, error });

export const onGetAllTypeFood = () => (dispatch) => {
  typeFoodRef.once('value')
  .then(payload => dispatch(onGetAllTypeFoodSuccess(payload.val())))
  .catch(error => dispatch(onGetAllTypeFoodFailure(error)))
}
