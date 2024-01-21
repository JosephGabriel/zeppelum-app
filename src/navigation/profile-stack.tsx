import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CameraScreen } from "../screens/camera";
import { ProfileScreen } from "../screens/profile";

const Stack = createStackNavigator();

const mainStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Câmera" component={CameraScreen} />
      </Stack.Navigator>
    </>
  );
};

export default mainStack;
