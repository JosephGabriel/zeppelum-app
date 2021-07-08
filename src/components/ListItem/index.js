import React from "react";
import { View, Text } from "react-native";

const ListItem = ({ title, status, icon }) => {
  return (
    <View>
      <List.Item
        style={{ alignItems: "center", padding: 0 }}
        title={title}
        left={() => <List.Icon icon="folder" />}
        right={() => <Checkbox.Item status={status} />}
      />
      <Divider />
    </View>
  );
};

export default ListItem;
