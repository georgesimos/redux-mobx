import {
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware
} from "redux";

const makeLouder = string => string.toUpperCase();
const repeatTreeTimes = string => string.repeat(3);
const embolden = string => string.bold();
