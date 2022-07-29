import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feautures/userSlice";
import authSlice from "../feautures/authSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
});
