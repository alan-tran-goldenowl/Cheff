import { actionNameToTypes } from '../utils';

const actions = {
  setListFood: (state, listFood) => ({
    listFood,
  }),
};

export const actionTypes = {
  setListFood: actionNameToTypes('setListFood'),
};

export default actions;
