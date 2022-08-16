import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Fontisto";
import Rating from "./Rating";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";


export default function ChatDocComp({ title, info, noHeader, noFooter, book }) {
  return (
    <View style={styles.cardContainer}>
      {!noHeader && (
        <View style={styles.cardHeaderContaner}>
          <Text style={styles.cardHeading}>{title}</Text>
          {/* <Text style={styles.cardMore}></Text> */}
        </View>
      )}
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            }}
          />
          <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>{info.tag}</Text>
            <Text style={styles.cardName}>{info.name}</Text>
            <Text style={styles.cardTime}>{info.time}</Text>
            <Text style={styles.cardAddress}>{info.address}</Text>
            <Text style={styles.cardAddress}>{info.detail}</Text>
            {info.rating && <Rating rating={info.rating} />}
            <View style={styles.iconMore}>
              <Icon name="angle-right" color="gray" />
            </View>
            {info.islike && (
              <View style={styles.iconLike}>
                <Icon name="heart" color="#E8008D" size={22} />
              </View>
            )}
            {book && (
              <View style={styles.buttonBooks}>
                <TouchableOpacity>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnGradient}
                    colors={["#554383", "#943F86"]}
                  >
                    <Text style={styles.btnBookText}>Book Visit</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        {!noFooter && <View style={styles.margin} />}

        {/* {!noFooter && (
          <View style={styles.cardBodyBottom}>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="checkcircleo" size={32} />
              <Text style={styles.cardBottomTitle}>Check-in</Text>
            </View>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="closecircleo" size={32} />
              <Text style={styles.cardBottomTitle}>Cancle</Text>
            </View>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="calendar" size={32} />
              <Text style={styles.cardBottomTitle}>Calendar</Text>
            </View>
            <View style={styles.cardGroupIcon}>
              <MaterialIcons name="explore" size={32} />
              <Text style={styles.cardBottomTitle}>Directions</Text>
            </View>
          </View>
        )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeaderContaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardMore: {
    fontWeight: "bold",
    color: "#7B6C95",
  },
  cardBody: {
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 10,
  },
  cardBodyTop: {
    flexDirection: "row",
  },
  cardAvatar: {
    height: 60,
    width: 60,
    backgroundColor: "gray",
    borderRadius: 60,
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  tag: {
    color: "#B066A4",
  },
  cardName: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTime: {
    color: "#222",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  cardAddress: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 5,
  },
  iconMore: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  iconLike: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  margin: {
    height: 1,
    backgroundColor: "#F0F1F2",
    width: "100%",
    marginVertical: 10,
  },
  cardBodyBottom: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardGroupIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  buttonBooks: {
    flexDirection: "row",
    marginTop: 20,
  },
  btnGradient: {
    padding: 10,
    borderRadius: 40,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});

