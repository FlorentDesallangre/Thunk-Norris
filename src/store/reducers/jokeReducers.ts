import { createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import IJoke, { IJokeState } from '../../@types/joke';
// eslint-disable-next-line import/no-cycle
import { createAppAsyncThunk } from '../../utils/redux';

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
    translated: '',
  },
};

export const loadAndTranslateJoke = createAppAsyncThunk(
  'WIDGET/LOAD_AND_TRANSLATE_JOKE',
  async () => {
    const jokeResponse = await axios.get<IJoke>(
      'https://api.chucknorris.io/jokes/random'
    );
    const joke = jokeResponse.data;

    const options = {
      method: 'POST',
      url: 'https://google-translator9.p.rapidapi.com/v2',
      headers: {
        'x-rapidapi-key': '2b41e6f4fbmshad94f4c3b164380p13ad08jsnbeeda76e1a46',
        'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        q: joke.value,
        source: 'en',
        target: 'fr',
        format: 'text',
      },
    };

    const translationResponse = await axios.request(options);
    const { translatedText } = translationResponse.data.data.translations[0];

    return { ...joke, value: translatedText };
  }
);

const jokeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAndTranslateJoke.pending, (state) => {
      state.loading = true;
    })
    .addCase(loadAndTranslateJoke.fulfilled, (state, action) => {
      state.joke = action.payload;
      state.loading = false;
    })
    .addCase(loadAndTranslateJoke.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });
});

export default jokeReducer;
