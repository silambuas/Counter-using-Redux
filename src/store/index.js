// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";
// export const DECREMENT = "decrement";
// export const INCREASE = "increase";
// export const RESET = "reset";
// export const TOGGLE = "toggle";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});


const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
