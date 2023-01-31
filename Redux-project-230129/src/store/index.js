import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const initialAuthState = {
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: 'counter',

  initialState: initialCounterState,

  reducers: {
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },

    reset(state) {
      state.counter = 0;
    },
  },
});

const authSlice = createSlice({
  name: 'auth',

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

// configureStore은 여러 개의 reducer을 하나로 합칠 수 있다.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
