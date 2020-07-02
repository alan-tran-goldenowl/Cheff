import lodash from 'lodash';
import {
  GET_FOOD_BY_TYPE_FAILURE,
  GET_FOOD_BY_TYPE_SUCCESS,
} from 'actions/constants';

export const INIT_STATE = {
  error: '',
};

const food = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FOOD_BY_TYPE_SUCCESS: {
      const arrayFood = Object.keys(action.payload).map(key => ({ key, ...action.payload[key] }));
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
    default:
      return state;
  }
};

export default food;
