import React from "react";
import { FlatList, View } from "react-native";

import SpotlightContainer from "../SpotlightContainer";

const SpotlightCarrousel = ({ cards }) => {
  return (
    <View
      style={{
        alignItems: "center",
        marginHorizontal: 20,
      }}
    >
      <FlatList
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SpotlightContainer uri={item.uri} />}
      />
    </View>
  );
};

export default SpotlightCarrousel;
