import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialStateDTO, ISetKeyDTO } from './types';

const initialState = {
  key: '',
} as IInitialStateDTO;

const teste = createSlice({
  name: 'teste',
  initialState,
  reducers: {
    setKey(state, action: PayloadAction<ISetKeyDTO>) {
      state.key = action.payload.key;
    },
  },
});

export const { setKey } = teste.actions;
export default teste.reducer;
