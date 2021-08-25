import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import OnBoardingBtn from "../../components/OnBoardingBtn";

const imageURL = require("../../assets/images/food_3.jpg");

const OnBoardingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={imageURL}
          resizeMode="cover"
          style={styles.headerImage}
        >
        <LinearGradient
          colors={["transparent", "#000"]}
          style={styles.gradient}
        >

          <Text style={{ color: "white",fontSize:44,fontWeight:"700",width:"80%",lineHeight:40 }}>Cook Healthy Eat Healthy</Text>
        </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.footer}>
        <Text style={styles.descriptionsText}>
          DescriptioiptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescrptionDescription
        </Text>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <OnBoardingBtn buttonText="Log In"/>
          <OnBoardingBtn buttonText="Sign Up" extraStyles={{ marginTop: 10 }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
  },
  headerImage: {
    flex:1,
    justifyContent:"flex-end"
    // width: "100%",
    // height: "100%",
  },
  footer: {
    flex: 1.5,
    padding: 16,
    backgroundColor: "#000",
  },
  gradient: {
    justifyContent:'flex-end',
    paddingHorizontal:10,
    // position: "absolute",
    // left: 0,
    // right: 0,
    // bottom: 0,
    height: 200,
  },
  descriptionsText: {
    width: "65%",
    color: "#aaa",
    fontWeight: "400",
    fontSize: 14,
  },
});
export default OnBoardingScreen;
