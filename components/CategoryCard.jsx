import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";


const fontSizes = {
  h1:24,
  h2: 20,
  h3:18,
  h4:16,
  h5: 12,
  h6:10
}

const CategoryCard = ({ categoryItem, onPress, extraStyles }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.categoryCard, { ...extraStyles,backgroundColor:colors.secondary }]}
    >
      <Image
        source={categoryItem.dishImage}
        resizeMode="cover"
        style={styles.categoryItem}
      />
      <View style={styles.cardDescriptionSection}>
        <Text style={[styles.descriptionHeaderText,{color:colors.lightgrey}]}>
          {categoryItem.dishName}
        </Text>
        <Text style={[styles.descriptionFooterText,{color:colors.text}]}>
          {categoryItem.cookDuration} | {categoryItem.numbOfServing} servings
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    flexDirection: "row",
    padding: 5,
    marginTop: 10,
    borderRadius: 8,
  },
  categoryItem: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  cardDescriptionSection: {
    width: "65%",
    paddingHorizontal: 20,
  },
  descriptionHeaderText: {
    flex: 1,
    fontSize: fontSizes.h2,
    fontWeight: "600",
  },
  descriptionFooterText: {
    fontSize: fontSizes.h5,
    fontWeight: "500",
  },
});
