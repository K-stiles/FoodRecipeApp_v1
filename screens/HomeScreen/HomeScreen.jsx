import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { useTheme } from "@react-navigation/native";

import CategoryCard from "../../components/CategoryCard";
import data from "../../DB/data";

const fontSizes = {
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 16,
  h5: 14,

  padding: 24,
  // body1: 30,
  // body2: 20,
  // body3: 16,
  // body4: 14,
};

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={() => {
          return (
            <View>
              {/* Header Section */}
              <View style={styles.headerSection}>
                <View>
                  <Text
                    style={{ ...styles.welcomeTitle, color: colors.primary }}
                  >
                    Hello John
                  </Text>
                  <Text
                    style={[styles.welcomeQuestion, { color: colors.secondary }]}
                  >
                    What do you want to cook today!
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Image
                    source={data[0].dishImage}
                    resizeMode="cover"
                    style={styles.profile}
                  />
                </TouchableOpacity>
              </View>

              {/* Search Bar Section */}
              <View
                style={{
                  ...styles.textInput,
                  backgroundColor: colors.secondary,
                }}
              >
                <Text style={{ color: colors.lightgrey }}>ICON</Text>
                <TextInput
                  placeholder="Search Food Recipe Here"
                  placeholderTextColor={colors.lightgrey}
                  style={{ flex: 1, marginLeft: 10, fontSize: fontSizes.h5 }}
                />
              </View>

              {/* See Recipe Bar Section */}
              <View
                style={[
                  styles.recipeSection,
                  { backgroundColor: colors.secondary },
                ]}
              >
                <View
                  style={[
                    {
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    { backgroundColor: colors.primary },
                  ]}
                >
                  <Image
                    source={data[0].dishImage}
                    resizeMode="cover"
                    style={styles.profile}
                  />
                </View>
                <View
                  style={{
                    width: "65%",
                    marginLeft: 10,
                    paddingHorizontal: fontSizes.padding,
                  }}
                >
                  <Text
                    style={[
                      { flex: 1, fontSize: fontSizes.h5 },
                      { color: colors.text },
                    ]}
                  >
                    You have 12 recipes that you haven't tries yet
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      alert("pressed");
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 20,
                        color: colors.primary,
                        textDecorationLine: "underline",
                        fontWeight: "bold",
                        fontSize: fontSizes.h5,
                      }}
                    >
                      See Recipes
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Trending Section */}
              <View style={{ marginVertical: 20 }}>
                <Text
                  style={{
                    marginHorizontal:  fontSizes.padding,
                    fontSize: fontSizes.h3,
                    fontWeight: "700",
                    marginBottom: 10,
                    color: colors.lightgrey,
                  }}
                >
                  Trending Recipes
                </Text>
                <FlatList
                  data={data}
                  keyExtractor={(item) => `${item.id}`}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => {
                        alert("Pressed");
                      }}
                      activeOpacity={.8}
                      style={{
                        marginLeft: index == 0 ?  fontSizes.padding : 0,
                        width: 250,
                        height: 350,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={item.dishImage}
                        resizeMode="cover"
                        style={{ width: 250, height: 350, borderRadius: 10 }}
                      />
                      <Text>{item.dishName}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>

              {/* Category Header Section */}
              <View style={styles.categoryHeaderSection}>
                <Text
                  style={[
                    { fontSize: fontSizes.h3, fontWeight: "700" },
                    { color: colors.lightgrey },
                  ]}
                >
                  Categories
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    alert("Presses");
                  }}
                >
                  <Text style={{ ...styles.viewAll, color: colors.primary }}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <CategoryCard
              categoryItem={item}
              onPress={() => navigation.navigate("TrendingRecipes", { item })}
              extraStyles={{ marginHorizontal:  fontSizes.padding }}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View style={{ marginTop: 20, marginBottom: 100 }}>
            <ActivityIndicator size={60} color={colors.primary} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  welcomeTitle: {
    fontSize: fontSizes.h3,
    fontWeight: "bold",
  },
  welcomeQuestion: {
    fontSize: fontSizes.h5,
    fontWeight: "600",
  },
  textInput: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginHorizontal: fontSizes.padding,
    paddingHorizontal: fontSizes.padding*0.5,
    borderRadius: 10,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: fontSizes.padding * 0.5,
    paddingHorizontal: fontSizes.padding,
    height: 80,
  },
  recipeSection: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: fontSizes.padding,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 10,
  },
  categoryHeaderSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:  fontSizes.padding,
    marginTop:  fontSizes.padding,
    marginBottom: 10,
  },
  viewAll: {
    fontSize: fontSizes.h5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
export default HomeScreen;
