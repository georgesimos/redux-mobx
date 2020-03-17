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

const reducer = (state = { value: 1 }, action) => {
  console.log("Something happened!", action);
  if (action.type === "ADD") {
    const value = state.value;
    const amount = action.payload.amount;
    return { ...state, value: value + amount };
  }
  return state;
};

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });

console.log(store.getState());
