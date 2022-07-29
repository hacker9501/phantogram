import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData  = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('session')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

(
  async () => {
      console.log(await getData())
  }
)()

console.log(getData())


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    session: (
      async () => {
          await getData()
      }
    )()
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
