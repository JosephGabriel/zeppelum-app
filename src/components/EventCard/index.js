import * as React from "react";
import { AirbnbRating } from "react-native-ratings";
import { Card, Paragraph } from "react-native-paper";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Cover } from "./styles";

const Rating1 = () => (
  <AirbnbRating
    count={5}
    reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
    defaultRating={3}
    size={10}
    isDisabled
    showRating={false}
    selectedColor="#6200EE"
  />
);

const _Card = ({ hasContent, item }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("EventDetails")}>
      <Container>
        <Cover source={{ uri: item.image }} />
        <Card.Title
          title={item.title}
          subtitle={`R$${item.price}`}
          subtitleStyle={{ color: "#6200EE" }}
          right={Rating1}
        />
        {hasContent ? (
          <Card.Content>
            <Paragraph>{item.description}</Paragraph>
          </Card.Content>
        ) : null}
      </Container>
    </Pressable>
  );
};

export default _Card;
