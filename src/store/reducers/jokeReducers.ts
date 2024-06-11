// ici on gère toute la partie connexion

import { createReducer } from '@reduxjs/toolkit';
import axios from 'axios'; // on utilise notre version custom typée de createAsyncThunk
// eslint-disable-next-line import/no-cycle
import { createAppAsyncThunk } from '../../utils/redux';
import IJoke, { IJokeState } from '../../@types/joke';

const initialState: IJokeState = {
  loading: false,
  error: '',
  joke: {
    categories: ['blague nulle'],
    created_at: '11/06/2024',
    icon_url: '',
    id: '1',
    updated_at: '11/06/2024',
    url: '',
    value: '',
  },
};
export const loadJoke = createAppAsyncThunk('WIDGET/LOAD_JOKE', async () => {
  const { data } = await axios.get<IJoke>(
    `https://api.chucknorris.io/jokes/random`
  );

  console.log(data);
  return data;
});

const jokeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadJoke.pending, (store) => {
      store.loading = true;
    })
    .addCase(loadJoke.fulfilled, (store, action) => {
      store.joke = action.payload;
      store.loading = false;
    })
    .addCase(loadJoke.rejected, (store, action) => {
      store.error = action.error.message as string;
      store.loading = false;
    });
});

export default jokeReducer;
