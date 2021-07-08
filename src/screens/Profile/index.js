import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Title, Avatar, Button, List, Subheading } from "react-native-paper";

import Container from "../../components/Container";
import { logoutUserStart } from "../../redux/user/userActions";
import { selectCurrentUser } from "../../redux/user/userSelector";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const userName = `${user.name} ${user.lastName}`;
  const userNameAlt =
    `@${user.name.toLowerCase()}${user.lastName.toLowerCase()}`
      .replace(" ", "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  return (
    <Container padding={26} paddingBottom={10}>
      <Title style={{ fontWeight: "bold", marginTop: 20 }}>Meu Perfil</Title>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <View style={{ alignSelf: "center", alignItems: "center" }}>
          {user.avatar ? (
            <Avatar.Image
              size={100}
              source={{
                uri: user.avatar,
              }}
            />
          ) : (
            <Avatar.Icon size={100} icon="account" />
          )}
          <Title style={{ fontWeight: "bold" }}>{userName}</Title>
          <Subheading style={{ margin: 0 }}>{userNameAlt}</Subheading>
        </View>
        <View>
          <List.Item
            title="First Item"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            left={(props) => <List.Icon {...props} icon="folder" />}
          />
          <List.Item
            title="First Item"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            left={(props) => <List.Icon {...props} icon="folder" />}
          />
          <List.Item
            title="First Item"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            left={(props) => <List.Icon {...props} icon="folder" />}
          />
        </View>
        <Button mode="contained" onPress={() => dispatch(logoutUserStart())}>
          Sair
        </Button>
      </View>
    </Container>
  );
};

export default Profile;
