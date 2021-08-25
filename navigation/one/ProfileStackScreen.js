import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProfileScreen } from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

