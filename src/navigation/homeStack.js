import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home"; 
import CategoryResults from "../screens/CategoryResults"; 
import EventDetails from "../screens/EventDetails"; 

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
        <Stack.Screen name="EventDetails" component={EventDetails} options={{
            title:"Detalhes"
        }} />
      </Stack.Navigator>
    </>
  );
};

export default homeStack;
