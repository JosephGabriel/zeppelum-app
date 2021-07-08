import React from "react";
import { FlatList, View } from "react-native";
import { Title } from "react-native-paper";

import EventCard from "../EventCard";

const data = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
  },
  {
    id: 2,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
  },
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
  },
  {
    id: 4,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
  },
  {
    id: 5,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
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
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <EventCard hasContent />}
      />
    </View>
  );
};

export default EventCardCarrousel;
