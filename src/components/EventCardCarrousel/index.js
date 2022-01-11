import React from "react";
import { FlatList, View } from "react-native";
import { Title } from "react-native-paper";

import EventCard from "../EventCard";

const data = [
  {
    id: 1,
    uri: "",
  },
  {
    id: 2,
    uri: "",
  },
  {
    id: 3,
    uri: "",
  },
  {
    id: 4,
    uri: "",
  },
  {
    id: 5,
    uri: "",
  },
];

const EventCardCarrousel = ({ isTitled, hasContent }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      {isTitled ? (
        <Title style={{ fontWeight: "bold", marginVertical: 20 }}>
          Em Alta
        </Title>
      ) : null}
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <EventCard hasContent />}
      />
    </View>
  );
};

export default EventCardCarrousel;
