import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./mainStack";
import MainTab from "./mainTab";

import { useAppSelector } from "../redux/store";

const Navigator = () => {
  const user = useAppSelector((state) => state.user.currentUser);

  return (
    <NavigationContainer>
      {user ? <MainTab /> : <MainStack />}
    </NavigationContainer>
  );
};

export default Navigator;
