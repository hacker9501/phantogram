import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const userSlice = createSlice({
  name: "auth",
  initialState: {
    session: {},
  },
  reducers: {
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
