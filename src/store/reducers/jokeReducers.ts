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
  // tout ce qui est retourné par l'asyncThunk sera récupéré au niveau du reducer dans le payload de l'action
  return data; // dispatch({type : "login.fulfilled", payload : data})
});

const jokeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadJoke.pending, (state) => {
      // ici on va gérer les valeurs du state lorsque notre promise est pending
      state.loading = true;
    })
    .addCase(loadJoke.fulfilled, (state, action) => {
      // ici on va gérer les valeurs du state lorsque notre promise est fulfilled
      // on récupère ce qui a été return par le thunk dans "action.payload"
      state.joke = action.payload;
    })
    .addCase(loadJoke.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });
});

export default jokeReducer;
