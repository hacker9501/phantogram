import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePac from "../screens/HomePac";
import ChatPac from "../screens/ChatPac";
import AppointmentPac from "./../screens/AppointmentPac";
import ProfilePac from "../screens/ProfilePac";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeDoc from './../screens/Doctor/HomeDoc';
import App from './../App';
import ChatDoc from "../screens/Doctor/ChatDoc";
import AppointmentDoc from "../screens/Doctor/AppointmentDoc";
import PatientsDoc from './../screens/Doctor/PatientsDoc';

const Tab = createBottomTabNavigator();

export default function TabsDoc() {
  return (
    <Tab.Navigator headerShown="false">
      <Tab.Screen
        name="HomeDoc"
        component={HomeDoc}
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
        name="AppointmentDoc"
        component={AppointmentDoc}
        options={{
          headerShown: false,
          tabBarLabel: "Appointment",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="schedule" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatDoc"
        component={ChatDoc}
        options={{
          headerShown: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wechat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PatientsDoc"
        component={PatientsDoc}
        options={{
          headerShown: false,
          tabBarLabel: "Patients",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

