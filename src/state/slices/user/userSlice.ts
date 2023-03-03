import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUser = {
  user: {
    id: 1,
    name: "osman dirican",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export default appSlice.reducer;
