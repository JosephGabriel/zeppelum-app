import React from "react";
import { View, Text } from "react-native";
import { List, Avatar, Divider } from "react-native-paper";

import {
  Container,
  Image,
  ContainerDetails,
  TextMode,
  TextView,
  ViewDetails,
  DividerView,
} from "./styles";

const CartItem = ({ title, price, mode, image }) => {
  return (
    <Container>
      <Image
        source={{
          uri: image,
        }}
      />
      <ViewDetails>
        <ContainerDetails>
          <View>
            <Text>{title}</Text>
            <TextView>
              <TextMode>{mode}</TextMode>
              <Text>R${price}</Text>
            </TextView>
          </View>
          <List.Icon icon="trash-can" />
        </ContainerDetails>
        <DividerView>
          <Divider />
        </DividerView>
      </ViewDetails>
    </Container>
  );
};

export default CartItem;
