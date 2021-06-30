import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { ImageContainer, Logo } from "./styles";

import Container from "../../components/Container";
import { selectCurrentUser } from "../../redux/user/userSelector";

const Preload = () => {
  const navigation = useNavigation();

  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    setTimeout(() => {
      user
        ? navigation.reset({
            routes: [{ name: "MainTab" }],
          })
        : navigation.reset({
            routes: [{ name: "Login" }],
          });
    }, 2000);
  }, []);

  return (
    <Container center>
      <ImageContainer>
        <Logo
          resizeMode="contain"
          source={require("../../../assets/logo.jpg")}
        />
        <ActivityIndicator size="large" />
      </ImageContainer>
    </Container>
  );
};

export default Preload;
