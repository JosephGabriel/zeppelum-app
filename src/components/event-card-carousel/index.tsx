import React from "react";
import { FlatList, View } from "react-native";
import { Title } from "react-native-paper";

import EventCard from "../EventCard";
import { FindAllEvents } from "../../services/api.types";

interface Props {
  data: FindAllEvents[];
  isTitled: boolean;
  hasContent: boolean;
}

const EventCardCarrousel = ({ isTitled, hasContent, data }: Props) => {
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
        renderItem={({ item }) => <EventCard item={item} hasContent />}
      />
    </View>
  );
};

export default EventCardCarrousel;
