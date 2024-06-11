import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, RootState } from '../store/store';

// on crée notre version custom typée de createAsyncThunk pour lui fournir le type de notre state et dispatch
// eslint-disable-next-line import/prefer-default-export
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();
