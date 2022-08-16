import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  Button,
  ScrollView
} from "react-native";
const W = Dimensions.get("window").width;
import AppointmentDocCard from "../../components/AppointmentDocCard";
import BackgroundHeader from "../../components/BackgroundHeader";

const appointments = [
  {
    id: 1,
    name: "Phaco Surge",
    date: "Today at 6:00PM",
    paciente: "David Bronsworth",
    duration: "120 Mins",
    category: "Paciente",
  },
  {
    id: 2,
    name: "David Bronsworth",
    date: "Tuesday at 3:00PM",
    paciente: "Maria Elena",
    duration: "30 Mins",
    category: "Paciente",
  },
  {
    id: 3,
    name: "Phaco Surge",
    date: "Today at 6:00PM",
    paciente: "David Bronsworth",
    duration: "120 Mins",
    category: "Paciente",
  },
  {
    id: 4,
    name: "David Bronsworth",
    date: "Tuesday at 3:00PM",
    paciente: "Maria Elena",
    duration: "30 Mins",
    category: "Paciente",
  },
  
];

export default function AppointmentDoc() {
  return (
    <>
      <BackgroundHeader style={styles.bg1} />
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Reminder</Text>
          <Text style={styles.text}>
            Don't forget schedule for upcoming appointment
          </Text><br/>
          <Text style={styles.ctas}>Citas de Hoy</Text>
          {/* <Button title="Cancel" onPress={() => navigation.navigate("")} />
          <Button title="Cancel" onPress={() => navigation.navigate("")} /> */}
        </View>
        <View>
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <AppointmentDocCard item={item} />;
            }}
          />
        </View>
      </SafeAreaView>
      </ScrollView>
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
  ctas: {
    color:"black",
    fontSize: 30,
  },
  bg1: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 280,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
