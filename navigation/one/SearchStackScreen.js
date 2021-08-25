import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SearchScreen } from "../screens/SearchScreen";

const SearchStack = createStackNavigator();

export default function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}
