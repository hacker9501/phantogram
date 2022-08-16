import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import CardHome from "../../components/CardHome";
import BackgroundHeader from "../../components/BackgroundHeader";
const W = Dimensions.get("window").width;
import Face from "../../components/Face";
import {supabase} from '../../lib/initSupabase';
import AppointmentDoc from "../../components/AppointmentDoccomp";
import AppointmentDoccomp from './../../components/AppointmentDoccomp';

export default function HomeDoc() {
  const user = supabase.auth.user();
  console.log(user)
  return (
    <>
      <BackgroundHeader style={styles.bg} />
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Hi</Text>
          <Text style={styles.desc}>Dr. Alexander!</Text><br/>
          <Text style={styles.ctas}>Citas de Hoy</Text>
        </View>
        {/* <View style={styles.faceContainer}>
          <Face icon="laughing" color="#E23f9c" title="Greet" />
          <Face icon="slightly-smile" title="Good" color="#C55696" />
          <Face icon="neutral" title="Okey" color="#A5008C" full />
          <Face icon="frowning" title="Bad" color="#827791" />
          <Face icon="expressionless" title="Awful" />
        </View> */}
        <View>
          <AppointmentDoccomp
            // title="Your Next Appointment"
            info={{
              name: "Natasha Romanoff",
              time: "Sunday, May 15th at 8:00 PM",
              address: "570 Kemmer Shores",
              detail: "San Francisco, CA 90293",
              islike: true,
            }}
          />
          <AppointmentDoccomp
            // title="Specialist in your area"
            info={{
              name: "Monica Rambeau",
              time: "Popular Pharma Limited",
              address: "Dermatologists",
              detail: "San Francisco, CA | 5 min",
              islike: true,
            
            
            }}
          />
          <AppointmentDoccomp
            // title="Your Next Appointment"
            info={{
              name: "Natasha Romanoff",
              time: "Sunday, May 15th at 8:00 PM",
              address: "570 Kemmer Shores",
              detail: "San Francisco, CA 90293",
              islike: true,
            }}
          />
          <AppointmentDoccomp
            // title="Specialist in your area"
            info={{
              name: "Monica Rambeau",
              time: "Popular Pharma Limited",
              address: "Dermatologists",
              detail: "San Francisco, CA | 5 min",
              islike: true,
             
              
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: W,
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 2,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  ctas: {
    color:"black",
    fontSize: 30,
  },
  desc: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
    marginTop: 5,
  },
  faceContainer: {
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  bg: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 250,
  },
});

