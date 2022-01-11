import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Title } from "react-native-paper";

import CartItem from "../../components/CartItem";
import Container from "../../components/Container";

const image =
  "https://images.unsplash.com/photo-1520338801623-6b88fe32bbf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

const Cart = () => {
  // const cardItems = useSelector();
  return (
    <>
      <Container padding={26} paddingBottom={10}>
        <Title style={{ fontWeight: "bold", marginVertical: 20 }}>
          Meu Carrinho
        </Title>
        <CartItem title="First Item" price={180} mode="Online" image={image} />
        <CartItem title="First Item" price={180} mode="Online" image={image} />
        <CartItem title="First Item" price={180} mode="Online" image={image} />
        <CartItem title="First Item" price={180} mode="Online" image={image} />
        <CartItem title="First Item" price={180} mode="Online" image={image} />
      </Container>
      {/* <Container center>
        <Avatar.Icon icon="cart-off" style={{ marginBottom: 10 }} />
        <Text>Seu carrinho esta vázio</Text>
      </Container> */}
    </>
  );
};

export default Cart;
