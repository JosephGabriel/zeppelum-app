import React from "react";
import { shallowEqual } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { MainStack } from "./main-stack";
import { MainTab } from "./main-tab";

import { useAppSelector } from "../redux/store";

export const Navigation = () => {
  const user = useAppSelector((state) => state.user.currentUser, shallowEqual);

  return (
    <NavigationContainer>
      {user ? <MainTab /> : <MainStack />}
    </NavigationContainer>
  );
};
