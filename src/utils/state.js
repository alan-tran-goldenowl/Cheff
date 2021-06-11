export const getListFood = state => Object.values(state.firebase.data.Food)
export const getListFoodByType = (state, type) => Object.values(state.firebase.data.Food).filter(item => item.type === type)
export const getListTypeFood = state => state.firebase.ordered.Type_Food
