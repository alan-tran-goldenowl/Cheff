import lodash from 'lodash';
import {
  GET_FOOD_BY_TYPE_FAILURE,
  GET_FOOD_BY_TYPE_SUCCESS,
  SEARCH_FOOD_SUCCESS,
} from 'actions/constants';
import { handle } from 'utils';
export const INIT_STATE = {
  error: '',
  dataSearch: [],
};

const food = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FOOD_BY_TYPE_SUCCESS: {
      const arrayFood = handle.convertObjectToArray(action.payload);
      return {
        ...state,
        [action.typeId]: arrayFood, // state [typeId] : []
        error: ''
      }
    }
    case GET_FOOD_BY_TYPE_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }
    case SEARCH_FOOD_SUCCESS: {
      const arrayFood = handle.convertObjectToArray(action.payload);
      return {
        ...state,
        dataSearch: arrayFood,
      }
    }
    default:
      return state;
  }
};

export default food;
