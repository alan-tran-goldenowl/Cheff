import { FireBase } from 'constants';
import {
  GET_ALL_TYPE_FOOD_FAILURE,
  GET_ALL_TYPE_FOOD_REQUEST,
  GET_ALL_TYPE_FOOD_SUCCESS,
 } from './constants';

export const onGetAllTypeFoodSuccess = (payload) => ({ type: GET_ALL_TYPE_FOOD_SUCCESS, payload });
export const onGetAllTypeFoodFailure = (error) => ({ type: GET_ALL_TYPE_FOOD_REQUEST, error });

export const onGetAllTypeFood = () => (dispatch) => {
  FireBase.database().ref('/Type_Food/').on('value',
  (payload) => dispatch(onGetAllTypeFoodSuccess(payload.val())),
  (error) => dispatch(onGetAllTypeFoodFailure(error)),
  )
}
