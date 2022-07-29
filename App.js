import {useState, useEffect} from 'react'
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider} from "react-redux";
import { ThemeProvider, colors } from "react-native-elements";
import store from './store/store'
import Main from './Main';
const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

export default function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer> 
        <Provider store={store}>
         <Main />
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
