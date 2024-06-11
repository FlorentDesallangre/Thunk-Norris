import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from './reducers/jokeReducers';

// 2b - on déclare nos différents states avec leurs reducers
const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
});

// 5a - extraction des types de notre store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
