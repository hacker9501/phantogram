import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from "react-redux";
import Home from "./../screens/Home";
import Auth from "../components/Auth";
import HomePac from "../screens/HomePac";
import LoginPac from "../screens/LoginPac";
import RegisterPac from "../screens/RegisterPac";
import ChatPac from "../screens/ChatPac";
import AppointmentPac from "../screens/AppointmentPac";
import ProfilePac from "../screens/ProfilePac";
import Tabs from "./Tabs";

const Stack = createStackNavigator();



export default function AuthStack() {
  const {session} = useSelector(state => state.user)
  console.log(session)
  return (
    <Stack.Navigator initialRouteName={session ? "Tabs" : "Home"} headerShown="false">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginPac" component={LoginPac} />
      <Stack.Screen name="RegisterPac" component={RegisterPac} />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="HomePac" component={HomePac} />
      <Stack.Screen name="ChatPac" component={ChatPac} />
      <Stack.Screen name="AppointmentPac" component={AppointmentPac} />
      <Stack.Screen name="ProfilePac" component={ProfilePac} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}
