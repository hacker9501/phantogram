import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const authSlice = createSlice({
  name: "auth",
  initialState: {
    session: ""
  },
  reducers: {
    setAuth: (state, action) => {
      return {
        ...state,
        session: {...action.payload}
      }
    },
    signOut: (state) => {
      return {
        ...state,
        session: ""
      }
    }
  },
});

export const {setAuth, signOut} = authSlice.actions;

export default authSlice.reducer;
