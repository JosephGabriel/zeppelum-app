import React from "react";
import { ScrollView, View } from "react-native";
import Container from "../../components/Container";

import EventCardCarrousel from "../../components/event-card-carousel";
import OfferButtonCarrousel from "../../components/OfferButtonCarrousel";

const CategoryResults = () => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <OfferButtonCarrousel />
      <ScrollView showsVerticalScrollIndicator={false}>
        <EventCardCarrousel />
        <EventCardCarrousel />
        <EventCardCarrousel />
        <EventCardCarrousel />
      </ScrollView>
    </View>
  );
};

export default CategoryResults;
