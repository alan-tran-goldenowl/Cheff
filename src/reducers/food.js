import lodash from 'lodash';
import dinner from 'assets/fakeDatas/dinner';
import breakfast from 'assets/fakeDatas/breakfast';
import brunch from 'assets/fakeDatas/brunch';
import lunch from 'assets/fakeDatas/lunch';
import recommend from 'assets/fakeDatas/recommend';
import { FAVORITE_FOOD_CHANGE } from 'actions/constants';

export const INIT_STATE = {
  listFood: [
    ...recommend,
    ...dinner,
    ...breakfast,
    ...brunch,
    ...lunch,
  ],
};

const food = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FAVORITE_FOOD_CHANGE: {
      const index = lodash.findIndex(state.listFood, { key: action.foodId });
      const item = state.listFood[index];
      const newItem = {
        ...item,
        favorite: !item.favorite,
        like: !item.favorite ? item.like + 1 : item.like - 1,
      };
      const newList = state.listFood.map((element) => (element.key === action.foodId ? newItem : element));
      return {
        ...state,
        listFood: newList,
      };
    }
    default:
      return state;
  }
};

export default food;
