import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoryResults from "../screens/CategoryResults"; 
import Home from "../screens/Home"; 

const Stack = createStackNavigator();
 

const homeStack = () => {
  return (
    <>
      <Stack.Navigator> 
        <Stack.Screen name="HomeStack" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="CategoryResults" component={CategoryResults} options={{
            title:"Categorias"
        }} />
      </Stack.Navigator>
    </>
  );
};

export default homeStack;
