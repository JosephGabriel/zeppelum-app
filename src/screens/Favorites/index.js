import React from "react";
import { List, Checkbox, Title, Divider } from "react-native-paper";

import Container from "../../components/Container";

const Favorites = () => {
  return (
    <Container padding={26} paddingBottom={10}>
      <List.Section>
        <Title style={{ fontWeight: "bold", marginTop: 20 }}>
          Meus Favoritos
        </Title>
      </List.Section>
    </Container>
  );
};

export default Favorites;
