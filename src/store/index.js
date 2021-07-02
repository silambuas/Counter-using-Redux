import { createStore } from "redux";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const INCREASE = "increase";
export const RESET = "reset";
export const TOGGLE = "toggle";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      if (state.counter > 0) return { ...state, counter: state.counter - 1 };
      return { ...state };
    case INCREASE:
      return { ...state, counter: state.counter + action.value };
    case RESET:
      return { ...state, counter: state.counter - state.counter };
    case TOGGLE:
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
