import React, { useState } from "react";
import { FlatList, View } from "react-native";

import CategoryItem from "../CategoryItem";

const CategoryCarrousel = ({ data }) => {
  return (
    <View
      style={{
        alignItems: "center",
        marginHorizontal: 20,
      }}
    >
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CategoryItem {...item} index={index} />
        )}
      />
    </View>
  );
};

export default CategoryCarrousel;
