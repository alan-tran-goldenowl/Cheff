import { FireBase } from 'constants';
import {
  GET_ALL_FOOD_FAILURE,
  GET_ALL_FOOD_SUCCESS,
} from './constants';

export const onGetAllFoodSuccess = (payload) => ({ type: GET_ALL_FOOD_SUCCESS, payload });
export const onGetAllFoodFailure = (error) => ({ type: GET_ALL_FOOD_FAILURE, error });

export const onGetAllFood = () => (dispatch) => {
  FireBase.database().ref('/Food/').on('value',
  (payload) => dispatch(onGetAllFoodSuccess(payload.val())),
  (error) => dispatch(onGetAllFoodFailure(error)),
  )
}
