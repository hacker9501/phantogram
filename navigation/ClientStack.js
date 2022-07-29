import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePac from "../screens/HomePac";
import ChatPac from "../screens/ChatPac";
import AppointmentPac from "../screens/AppointmentPac";
import ProfilePac from "../screens/ProfilePac";
import Tabs from "./Tabs";

const Stack = createStackNavigator();



export default function ClientStack() {
  return (
    <Stack.Navigator headerShown="false">
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="HomePac" component={HomePac} />
      <Stack.Screen name="ChatPac" component={ChatPac} />
      <Stack.Screen name="AppointmentPac" component={AppointmentPac} />
      <Stack.Screen name="ProfilePac" component={ProfilePac} />
    </Stack.Navigator>
  );
}
