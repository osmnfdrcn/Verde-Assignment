import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IApp {
  isOpenCreateModal: boolean;
  isOpenConfirmModal: boolean;
}

const initialState: IApp = {
  isOpenCreateModal: false,
  isOpenConfirmModal: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenCreateModal: (state: IApp, { payload }: PayloadAction<boolean>) => {
      state.isOpenCreateModal = payload;
    },
    setOpenConfirmModal: (state: IApp, { payload }: PayloadAction<boolean>) => {
      state.isOpenConfirmModal = payload;
    },
  },
});

export const { setOpenCreateModal, setOpenConfirmModal } = appSlice.actions;
export default appSlice.reducer;
