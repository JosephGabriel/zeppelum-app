import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Chip } from "react-native-paper";

import { Container } from "./styles";

const CategoryItem = ({ name, icon, index,category }) => {
  const [selected, setSelected] = useState(false);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("CategoryResults",{ name });
  };

  return (
    <Container>
      <Chip
        selectedColor={selected ? "#fff" : null}
        style={selected ? { backgroundColor: "#6200EE" } : null}
        textStyle={selected ? { color: "#fff" } : null}
        icon={icon}
        onPress={onPress}
        selected={selected}
      >
        {name}
      </Chip>
    </Container>
  );
};

export default CategoryItem;
