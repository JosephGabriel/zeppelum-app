import * as React from "react";
import { AirbnbRating } from "react-native-ratings";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { EventApiPayload } from "../../services/api.types";

import {
  Container,
  Cover,
  DescriptionText,
  PriceText,
  RatingContainer,
} from "./styles";

interface Props {
  item: EventApiPayload;
  hasContent: boolean;
}

export const EventCard = ({ hasContent, item }: Props) => {
  const navigation = useNavigation();

  const navigateToPage = () => {
    navigation.navigate("EventDetails", {
      item,
    });
  };

  return (
    <Container onPress={navigateToPage}>
      <Cover
        source={{
          uri: "https://anbc.org.br/wp-content/uploads/2015/12/placeholder.gif",
        }}
      />

      <Card.Title title={item.title} />

      {hasContent ? (
        <Card.Content>
          <DescriptionText numberOfLines={2} ellipsizeMode="tail">
            {item.shortDescription}
          </DescriptionText>

          <PriceText numberOfLines={2} ellipsizeMode="tail">
            R${item.price}
          </PriceText>
        </Card.Content>
      ) : null}

      <RatingContainer>
        <AirbnbRating
          count={5}
          defaultRating={item.rating}
          size={10}
          isDisabled
          showRating={false}
          selectedColor="#6200EE"
        />
      </RatingContainer>
    </Container>
  );
};
