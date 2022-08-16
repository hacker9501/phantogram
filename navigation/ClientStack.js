import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePac from "../screens/HomePac";
import ChatPac from "../screens/ChatPac";
import AppointmentPac from "../screens/AppointmentPac";
import ProfilePac from "../screens/ProfilePac";
import Tabs from "./Tabs";
import HomeDoc from "../screens/Doctor/HomeDoc";
import TabsDoc from './TabsDoc';
import ChatDoc from './../screens/Doctor/ChatDoc';
import AppointmentDoc from "../screens/Doctor/AppointmentDoc";
import PatientsDoc from './../screens/Doctor/PatientsDoc';
import Chat from './../screens/Chat';

const Stack = createStackNavigator();


export default function ClientStack() {
  return (
    <Stack.Navigator headerShown="false">
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Chat" component={Chat} />
      {/* <Stack.Screen name="HomeDoc" component={HomeDoc} />
      <Stack.Screen name="ChatDoc" component={ChatDoc} />
      <Stack.Screen name="AppointmentDoc" component={AppointmentDoc} />
      <Stack.Screen name="PatientsDoc" component={PatientsDoc} /> */}
      {/* <Stack.Screen name="HomePac" component={HomePac} />
      <Stack.Screen name="ChatPac" component={ChatPac} />
      <Stack.Screen name="AppointmentPac" component={AppointmentPac} />
      <Stack.Screen name="ProfilePac" component={ProfilePac} /> */}
    </Stack.Navigator>
  );
}
