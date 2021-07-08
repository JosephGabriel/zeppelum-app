import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Subheading, Title, Chip, Button, Paragraph } from "react-native-paper";

import Container from "../../components/Container";
import EventCardCarrousel from "../../components/EventCardCarrousel";

const EventDetails = ({ item }) => {
  // const {title, description,price} = item

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        source={{ uri: "https://wallpapercave.com/wp/wp2737727.jpg" }}
        resizeMode="cover"
        style={{ width: "100%", height: 250 }}
      />
      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <Title style={{ fontWeight: "600" }}>Artes & Matemática</Title>
          <Subheading style={{ fontWeight: "bold", color: "#6200EE" }}>
            R$150,00
          </Subheading>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Chip style={{ marginRight: 10 }}>Online</Chip>
            <Chip>Example Chip</Chip>
          </View>
          <Button mode="contained">Comprar</Button>
        </View>
        <Paragraph style={{ marginVertical: 20 }}>
          Finely crafted graphite wooden pencil. Premium quality lead guarantees
          smoothness at all times. Ideal for artists and designers. HB hardness
          only.
        </Paragraph>
      </View>
      <Container padding={20} background="#eee">
        <EventCardCarrousel isTitled />
      </Container>
    </ScrollView>
  );
};

export default EventDetails;
