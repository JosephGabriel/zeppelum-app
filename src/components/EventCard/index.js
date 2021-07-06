import * as React from "react";
import { AirbnbRating } from "react-native-ratings";
import { Card, Paragraph } from "react-native-paper";
import { Container,Cover } from "./styles";

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

const _Card = ({hasContent}) => (
  <Container>
    <Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Title
      title="Headline 5"
      subtitle="R$ 1,200.00"
      subtitleStyle={{ color: "#6200EE" }}
      right={Rating1}
    />
    {
    hasContent ? <Card.Content>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Paragraph>
    </Card.Content> : null
    }
  </Container>
);

export default _Card;
