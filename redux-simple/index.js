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

const calculatorReducer = (state = { value: 1 }, action) => {
  console.log("calculatorReducer: ", action);
  if (action.type === "ADD") {
    const value = state.value;
    const amount = action.payload.amount;
    return { ...state, value: value + amount };
  }
  return state;
};

const errorReducer = (state = { error: null }, action) => {
  console.log("errorReducer: ", action);
  if (action.type === "ERROR") {
    return { ...state, error: action.payload };
  }
  return state;
};

const reducer = combineReducers({
  calculator: calculatorReducer,
  error: errorReducer
});

const logger = ({ getState }) => {
  return next => action => {
    console.log("MIDDLEWARE", getState(), action);

    const value = next(action);
    console.log("state after dispatch", getState());
    return value;
  };
};

const store = createStore(reducer, applyMiddleware(logger));

const createAddAction = amount => ({
  type: "ADD",
  payload: { amount }
});

const dispatchAdd = bindActionCreators(createAddAction, store.dispatch); // Same as store.dispatch(createAddAction(2));
dispatchAdd(10);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch({
  type: "ERROR",
  payload: { message: "This is an error" },
  meta: {}
});

unsubscribe();
