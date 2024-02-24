import React from "react";
import { ScrollView, View } from "react-native";

import EventCardCarrousel from "../../components/event-card-carousel";
import CategoryCarrousel from "../../components/category-carrousel";

const data = [
  {
    id: 1,
    name: "Infraestrutura",
  },
  {
    id: 2,
    name: "Geometria",
  },
  {
    id: 3,
    name: "Finanças",
  },
  {
    id: 4,
    name: "Artes",
  },
];

const CategoryResults = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <CategoryCarrousel data={data} />
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
