import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const W = Dimensions.get("window").width;

export default function BackgroundHeader({ style }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#023e8a", "#4361ee", "#4cc9f0"]}
      style={[styles.linearGradient, style]}
    >
      <View style={styles.line}></View>
      <View style={[styles.line, { top: 130, left: -150 }]}></View>
      <View style={[styles.line, { top: 160, left: 0 }]}></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: (W * 3) / 4,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  line: {
    position: "absolute",
    width: W,
    backgroundColor: "rgba(189, 224, 254, 0.1)",
    top: 100,
    left: -300,
    height: 80,
    transform: [
      {
        rotate: "-35deg",
      },
    ],
    borderRadius: 60,
  },
});
