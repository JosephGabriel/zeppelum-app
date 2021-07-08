import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "../navigation/mainStack";
import MainTab from "../navigation/mainTab";
import { selectCurrentUser } from "../redux/user/userSelector";

const Navigator = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <NavigationContainer>
      {user ? <MainTab /> : <MainStack />}
    </NavigationContainer>
  );
};

export default Navigator;
