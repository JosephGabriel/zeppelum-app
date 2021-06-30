import React from "react";
import { Pressable } from "react-native";

import { SurfaceContainer, Text, Percentage } from "./styles";

const OfferButton = ({ price, onPress }) => (
  <Pressable onPress={onPress}>
    <SurfaceContainer>
      <Text>
        {price}
        <Percentage>%</Percentage>
      </Text>
    </SurfaceContainer>
  </Pressable>
);

export default OfferButton;
