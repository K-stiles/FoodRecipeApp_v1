import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { BookmarkScreen } from "../screens/BookmarkScreen";

const BookmarkStack = createStackNavigator();

export default function BookmarkStackScreen() {
  return (
    <BookmarkStack.Navigator screenOptions={{headerShown:false}}>
      <BookmarkStack.Screen name="BookmarkScreen" component={BookmarkScreen} />
    </BookmarkStack.Navigator>
  );
}
