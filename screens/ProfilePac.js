import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import { supabase } from "../lib/initSupabase";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackgroundHeader from "../components/BackgroundHeader";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ProfilePac() {

  async function signOutWithEmail() {
    const { error } = await supabase.auth.signOut()
    console.log('Running')
    if(error) Alert.alert(error.message)
  }

  return (
    <>
      <BackgroundHeader style={styles.bg1} />
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.img}
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            }}
          />
          <Text style={styles.textName}>Angela Karol</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5 name="house-user" size={30} />
              <Text style={{ paddingLeft: 10, fontSize: 17 }}>Setting</Text>
            </View>
            <Entypo name="chevron-small-right" size={30} />
          </View>
          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="logout" size={30} onPress={() => signOutWithEmail()}/>
              <Text style={{ paddingLeft: 10, fontSize: 17 }}>Log Out</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  buttonBack: {
    width: 40,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 15,
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 15,
    justifyContent: "space-between",
  },
  textName: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: "auto",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cardContainer: {
    marginTop: 50,
  },
  card: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: "space-between",
    borderRadius: 15,
    marginVertical: 5,
  },
  bg: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 250,
  },
  bg1: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 280,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
