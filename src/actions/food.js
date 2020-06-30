import { FAVORITE_FOOD_CHANGE } from './constants';

export const onFavoriteChange = (foodId) => ({ type: FAVORITE_FOOD_CHANGE, foodId });
