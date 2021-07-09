import React from "react";
import { View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { Title, Avatar, Button, List, Subheading } from "react-native-paper";

import Container from "../../components/Container";
import { logoutUserStart } from "../../redux/user/userActions";
import { selectCurrentUser } from "../../redux/user/userSelector";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const navigation = useNavigation();

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
            <Pressable onPress={() => navigation.navigate("Camera")}>
              <Avatar.Image
                size={100}
                source={{
                  uri: user.avatar,
                }}
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => navigation.navigate("Camera")}>
              <Avatar.Icon size={100} icon="account" />
            </Pressable>
          )}
          <Title style={{ fontWeight: "bold" }}>{userName}</Title>
          <Subheading style={{ margin: 0 }}>{userNameAlt}</Subheading>
        </View>
        <View>
          <List.Item
            title="Meus Eventos"
            description="Assista seus eventos"
            left={(props) => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            title="Meus Cartões"
            description="Gerencie seus cartões de pagamentos"
            left={(props) => <List.Icon {...props} icon="credit-card" />}
          />
          <List.Item
            title="Meus Ingressos"
            description="Tenha acesso a seus ingressos"
            left={(props) => <List.Icon {...props} icon="ticket" />}
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
