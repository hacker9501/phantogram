import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../screens/Home";
import LoginPac from "../screens/LoginPac";
import RegisterPac from "../screens/RegisterPac";

const Stack = createStackNavigator();



export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Home" headerShown="false">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginPac" component={LoginPac} />
      <Stack.Screen name="RegisterPac" component={RegisterPac} />
    </Stack.Navigator>
  );
}
