import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import appSlice from "./slices/app/appSlice";
import postSlice from "./slices/posts/postSlice";
import userSlice from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    posts: postSlice,
    users: userSlice,
  },

  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
