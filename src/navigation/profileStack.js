import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Camera from "../screens/Camera";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const mainStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Câmera" component={Camera} />
      </Stack.Navigator>
    </>
  );
};

export default mainStack;
