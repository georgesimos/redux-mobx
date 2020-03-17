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

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });
store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });

unsubscribe();

store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });
