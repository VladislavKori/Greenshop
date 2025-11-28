import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthModalState = "wait" | "register" | "login";

interface AuthModalsState {
  modalState: AuthModalState;
}

const initialState: AuthModalsState = { modalState: "wait" };

export const authModalsSlice = createSlice({
  name: 'authModals',
  initialState,
  reducers: {
    changeModalState: (state, payload: PayloadAction<AuthModalState>) => {
      state.modalState = payload.payload;
    },
  },
});

export const { changeModalState } = authModalsSlice.actions;
export const authModalReducer = authModalsSlice.reducer;
