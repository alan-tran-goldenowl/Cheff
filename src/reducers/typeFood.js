import lodash from 'lodash';
import {
  GET_ALL_TYPE_FOOD_FAILURE,
  GET_ALL_TYPE_FOOD_SUCCESS,
} from 'actions/constants';
import { handle } from 'utils';
export const INIT_STATE = {
  list: [],
  error: '',
};

const typeFood = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TYPE_FOOD_SUCCESS: {
      const list = handle.convertObjectToArray(action.payload)
      return {
        ...state,
        list,
        error: ''
      };
    }
    case GET_ALL_TYPE_FOOD_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state;
  }
};

export default typeFood;
