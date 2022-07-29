import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Rating({ rating }) {
  return (
    <View style={styles.rating}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (rating > i) {
            return (
              <AntDesign
                key={i}
                name="star"
                color="#FA8D00"
                style={{ marginRight: 5 }}
              />
            );
          }
          return <AntDesign key={i} name="staro" style={{ marginRight: 5 }} />;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    marginTop: 5,
  },
});
