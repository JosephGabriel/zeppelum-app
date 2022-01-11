import React from "react";
import { FlatList, View } from "react-native";

import OfferButton from "../OfferButton";

const data = [
  {
    id: 1,
    price: "10",
  },
  {
    id: 2,
    price: "20",
  },
  {
    id: 3,
    price: "30",
  },
  {
    id: 4,
    price: "50",
  },
  {
    id: 5,
    price: "60",
  },
];

const OfferButtonCarrousel = () => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        horizontal
        renderItem={({ item }) => <OfferButton {...item} />}
      />
    </View>
  );
};

export default OfferButtonCarrousel;
