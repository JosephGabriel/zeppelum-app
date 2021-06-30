import React from "react";
import { FlatList, View } from "react-native";
import { Title, Headline } from "react-native-paper";

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

const EventCardCarrousel = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Headline style={{ fontWeight: "bold" }}>Em Alta</Headline>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => <EventCard />}
      />
    </View>
  );
};

export default EventCardCarrousel;
