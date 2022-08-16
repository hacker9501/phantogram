import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "./../screens/Home";
// import LoginPac from "../screens/LoginPac";
// import RegisterPac from "../screens/RegisterPac";
// import LoginDoc from './../screens/Doctor/LoginDoc';
// import RegisterDoc from './../screens/Doctor/RegisterDoc';
import TabsDoc from './TabsDoc';
import Chat from './../screens/Chat';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="TabsDoc" headerShown="false">
       {/* <Stack.Screen name="Home" component={Home} />  */}
      {/* <Stack.Screen name="Chat" component={Chat} /> */}
      <Stack.Screen name="TabsDoc" component={TabsDoc} />
      {/* <Stack.Screen name="LoginPac" component={LoginPac} />
      <Stack.Screen name="RegisterPac" component={RegisterPac} />
      <Stack.Screen name="LoginDoc" component={LoginDoc} />
      <Stack.Screen name="RegisterDoc" component={RegisterDoc} /> */}
    </Stack.Navigator>
  );
}
