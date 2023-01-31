import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counterSlice',

  initialState,

  reducers: {
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter++;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// configureStore은 여러 개의 reducer을 하나로 합칠 수 있다.
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
