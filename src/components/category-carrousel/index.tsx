import React from "react";
import { FlatList, View } from "react-native";

import CategoryItem from "../CategoryItem";

export const CategoryCarousel = ({ data }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
      }}
    >
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
          <CategoryItem {...item} index={index} />
        )}
      />
    </View>
  );
};
