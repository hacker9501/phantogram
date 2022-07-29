import { createSlice } from "@reduxjs/toolkit";
import {supabase} from '../lib/initSupabase'

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        user: {...action.payload}
      }
    }
  },
});

export const {login} = userSlice.actions;

export default userSlice.reducer;
