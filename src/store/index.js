// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";
// export const DECREMENT = "decrement";
// export const INCREASE = "increase";
// export const RESET = "reset";
// export const TOGGLE = "toggle";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter && state.counter--;
      return state;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    reset(state) {
      state.counter = state.counter - state.counter;
    },
  },
});
// const counterReducer = (state = initialState , action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, counter: state.counter + 1 };
//     case DECREMENT:
//       if (state.counter > 0) return { ...state, counter: state.counter - 1 };
//       return { ...state };
//     case INCREASE:
//       return { ...state, counter: state.counter + action.value };
//     case RESET:
//       return { ...state, counter: state.counter - state.counter };
//     case TOGGLE:
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
