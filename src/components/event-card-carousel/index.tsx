import React from "react";
import { FlatList, View } from "react-native";
import { Title } from "react-native-paper";

import { EventCard } from "../event-card";

import { EventApiPayload } from "../../services/api.types";

interface Props {
  data: EventApiPayload[];
  title: string;
  hasContent: boolean;
}

export const EventCardCarousel = ({ title, data }: Props) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      {title.length && (
        <Title style={{ fontWeight: "bold", marginVertical: 20 }}>
          {title}
        </Title>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <EventCard item={item} hasContent />}
      />
    </View>
  );
};
