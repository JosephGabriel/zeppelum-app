import React from "react";
import { View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Title, Avatar, Button, List, Subheading } from "react-native-paper";

import { useAppSelector } from "../../redux/store";

import { logOutUser } from "../../redux/reducers/users";

import { Container } from "./styles";

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useAppSelector((state) => state.user.currentUser);

  const userName = `${user.name} ${user.lastname}`;

  const userNameAlt =
    `@${user.name.toLowerCase()}${user.lastname.toLowerCase()}`
      .replace(" ", "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const logOut = () => dispatch(logOutUser());

  return (
    <Container>
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
            hasTVPreferredFocus={false}
            tvParallaxProperties={false}
            title="Meus Eventos"
            description="Assista seus eventos"
            left={(props) => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            hasTVPreferredFocus={false}
            tvParallaxProperties={false}
            title="Meus Cartões"
            description="Gerencie seus cartões de pagamentos"
            left={(props) => <List.Icon {...props} icon="credit-card" />}
          />
          <List.Item
            hasTVPreferredFocus={false}
            tvParallaxProperties={false}
            title="Meus Ingressos"
            description="Tenha acesso a seus ingressos"
            left={(props) => <List.Icon {...props} icon="ticket" />}
          />
        </View>
        <Button mode="contained" onPress={logOut}>
          Sair
        </Button>
      </View>
    </Container>
  );
};
