import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { customDarkTheme, customDefaultTheme } from "../assets/utils/Theme";
import OnboardingScreen from "../screens/onBoardingScreens";
import TabRoutes from "./Tabs";
import { TrendingRecipesScreen } from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function StackScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={TabRoutes} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="HomeTab" component={TabRoutes} />
        <Stack.Screen name="TrendingRecipes" component={TrendingRecipesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
