import * as React from "react";
import { supabase } from "../lib/initSupabase";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  ScrollView
} from "react-native";
const W = Dimensions.get("window").width;
import AppointmentCard from "../components/AppointmentCard";
import BackgroundHeader from "../components/BackgroundHeader";

const appointments = [
  {
    id: 1,
    name: "Phaco Surge",
    date: "Today at 6:00PM",
    doctor: "David Bronsworth",
    duration: "120 Mins",
    category: "Physiotherapy",
  },
  {
    id: 2,
    name: "María Elena",
    date: "Tuesday at 3:00PM",
    doctor: "David Bronsworth",
    duration: "30 Mins",
    category: "Physiotherapy",
  },
];

export default function AppointmentPac() {
  const session = supabase.auth.session();
  console.log(session)
  return (
    <>
      <BackgroundHeader style={styles.bg1} />
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Reminder</Text>
          <Text style={styles.text}>
            Don't forget schedule for upcoming appointment
          </Text>
        </View>
        <View>
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <AppointmentCard item={item} />;
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    marginTop: 50,
  },
  heading: {
    marginBottom: 25,
  },
  title: {
    fontSize: 25,
    color: "#fff",
  },
  text: {
    fontSize: 15,
    color: "#fff",
  },
  bg1: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 280,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
