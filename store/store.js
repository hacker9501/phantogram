import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feautures/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
