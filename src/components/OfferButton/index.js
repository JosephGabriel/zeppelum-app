import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

import { SurfaceContainer, Text, Percentage } from "./styles";

const OfferButton = ({ price }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("OfferResults");
  };
  return (
    <Pressable onPress={onPress}>
      <SurfaceContainer mode="outlined">
        <Text>
          {price}
          <Percentage>%</Percentage>
        </Text>
      </SurfaceContainer>
    </Pressable>
  );
};

export default OfferButton;
