import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomePac from "../screens/HomePac";
import ChatPac from "../screens/ChatPac";
import AppointmentPac from "./../screens/AppointmentPac";
import ProfilePac from "../screens/ProfilePac";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();


export default function Tabs() {
  return (
    <Tab.Navigator headerShown="false">
      <Tab.Screen
        name="HomePac"
        component={HomePac}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AppointmentPac"
        component={AppointmentPac}
        options={{
          headerShown: false,
          tabBarLabel: "Appointment",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="schedule" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatPac"
        component={ChatPac}
        options={{
          headerShown: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wechat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePac"
        component={ProfilePac}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
