import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const colors = {
  primary: "#1e460b",
  secondary: "#01c95e",
  backgroundColor: "green",
};

const OnBoardingBtn = ({ onPress, extraStyles,buttonText }) => {
  if (!extraStyles) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
      >
       <LinearGradient
          colors={[colors.secondary,colors.primary]}
          style={[styles.gradient,styles.primaryBtn]}
        >

        <Text style={styles.buttonText}>{buttonText}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.secondaryBtn, { ...extraStyles }]}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  primaryBtn: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  secondaryBtn: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  gradient: {
    justifyContent:'flex-end',
    paddingHorizontal:10,
  },
});

export default OnBoardingBtn;
