import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Fontisto";

export default function Face({ icon, title, color, full }) {
  return (
    <View>
      {full ? (
        <View style={{ backgroundColor: color, borderRadius: 40 }}>
          <Icon name={icon} size={36} color={"#fff"} />
        </View>
      ) : (
        <Icon name={icon} size={36} color={color} />
      )}
      <Text style={[styles.faceText, { color }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  faceGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },
});
