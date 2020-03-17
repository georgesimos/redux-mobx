const {
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware
} = require("redux");

const makeLouder = string => string.toUpperCase();
const repeatTreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

const makeLouderAndBoldAndRepeatThreeTimes = compose(
  embolden,
  repeatTreeTimes,
  makeLouder
);

console.log(makeLouderAndBoldAndRepeatThreeTimes("simos"));
