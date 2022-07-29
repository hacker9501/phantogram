import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { Button, Input } from "react-native-elements";
const { width, height } = Dimensions.get("screen");
import Fontisto from "react-native-vector-icons/Fontisto";

export default function AppointmentCard({ item }) {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardTop}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>{item.doctor}</Text>
            <Text style={{ fontSize: 14, fontWeight: "300", color: "red" }}>
              {item.category}
            </Text>
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            }}
            alt={item.name}
            style={{ width: 100, height: 100, borderRadius: 20 }}
          />
        </View>

        <View style={styles.cardMiddle}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto name="date" size={25} />
            <Text style={{ paddingHorizontal: 15 }}>{item.date}</Text>
          </View>
          <Text>{item.duration}</Text>
        </View>

        <View style={styles.cardBottom}>
          <Button title="Cancel" onPress={() => navigation.navigate("")} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 15,
  },
  buttonContainer: {
    width: width / 3,
    height: height / 20,
  },
  btn: {
    marginTop: 10,
    borderColor: "#000",
    borderWidth: 1,
    color: "#000",
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardMiddle: {
    marginVertical: 15,
    backgroundColor: "#edf6f9",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
});
