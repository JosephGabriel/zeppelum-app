import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { ImageContainer, Logo } from "./styles";

import { Container } from "../../components/container";

export const Preload = () => {
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
