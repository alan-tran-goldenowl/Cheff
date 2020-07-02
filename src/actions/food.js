import { FireBase } from 'constants';
import {
  GET_FOOD_BY_TYPE_FAILURE,
  GET_FOOD_BY_TYPE_SUCCESS,
} from './constants';

const foodRef = FireBase.database().ref('Food/');
export const onGetFoodByTypeSuccess = (payload, typeId) => ({ type: GET_FOOD_BY_TYPE_SUCCESS, payload, typeId });
export const onGetFoodByTypeFailure = (error) => ({ type: GET_FOOD_BY_TYPE_FAILURE, error });

export const onGetFoodByType = (typeId) => (dispatch) => {
  foodRef.orderByChild('type').equalTo(typeId).on('value',
  (payload) => dispatch(onGetFoodByTypeSuccess(payload.val(), typeId)),
  (error) => dispatch(onGetFoodByTypeFailure(error)),
  )
}
