import React from "react";
import { ScrollView, View } from "react-native";

import EventCardCarrousel from "../../components/EventCardCarrousel";
import OfferButtonCarrousel from "../../components/OfferButtonCarrousel";

const CategoryResults = ({ route }) => {
  const { name } = route.params;
  return (
    <View padding={20}>
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
