import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/home";
import CategoryResults from "../screens/CategoryResults";
import OfferResults from "../screens/OfferResults";
import { EventDetails } from "../screens/event-details";

const Stack = createStackNavigator();

const homeStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CategoryResults"
          component={CategoryResults}
          options={{
            title: "Categorias",
          }}
        />
        <Stack.Screen
          name="OfferResults"
          component={OfferResults}
          options={{
            title: "Ofertas",
          }}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{
            title: "Detalhes",
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default homeStack;
