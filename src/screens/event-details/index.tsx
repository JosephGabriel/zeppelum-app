import React from "react";
import { useRoute } from "@react-navigation/native";
import { Chip, Button } from "react-native-paper";

import { EventPayload } from "../../services/types";

import {
  ChipContainer,
  DescriptionText,
  DetailsContainer,
  ImageCover,
  OptionsContainer,
  ScrollContainer,
  SubheadingText,
  TitleText,
} from "./styles";

export const EventDetails = () => {
  const { params } = useRoute();

  // @ts-ignore
  const item = params.item as EventPayload;

  return (
    <ScrollContainer>
      <ImageCover
        resizeMode="cover"
        source={{
          uri: "https://anbc.org.br/wp-content/uploads/2015/12/placeholder.gif",
        }}
      />

      <DetailsContainer>
        <TitleText numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </TitleText>

        <OptionsContainer>
          <ChipContainer>
            <Chip selected={item.type === "ONLINE"} style={{ marginRight: 10 }}>
              Online
            </Chip>

            <Chip selected={item.type === "PRESENTIAL"}>In Person</Chip>
          </ChipContainer>

          <Button mode="contained">Comprar</Button>
        </OptionsContainer>

        <SubheadingText>R${item.price}</SubheadingText>

        <DescriptionText>{item.description}</DescriptionText>
      </DetailsContainer>

      {/* <Container background="#efefef">
        <EventCardCarousel isTitled />
      </Container> */}
    </ScrollContainer>
  );
};
