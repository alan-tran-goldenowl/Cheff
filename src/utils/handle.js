export default {
  convertObjectToArray: object => Object.keys(object).map(key => ({ key, ...object[key] })),
}
