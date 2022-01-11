import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { selectCurrentUser } from "../../redux/user/userSelector";

import Container from "../../components/Container";
import Searchbar from "../../components/Searchbar";
import CategoryCarrousel from "../../components/CategoryCarrousel";
import SpotlightCarrousel from "../../components/SpotlightCarrousel";
import EventCardCarrousel from "../../components/EventCardCarrousel";
import OfferButtonCarrousel from "../../components/OfferButtonCarrousel";

const data = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
  },
  {
    id: 2,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
  },
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
  },
  {
    id: 4,
    uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80",
  },
];

const chips = [
  {
    id: 1,
    name: "Infraestrutura",
  },
  {
    id: 2,
    name: "Geometria",
  },
  {
    id: 3,
    name: "Finanças",
  },
  {
    id: 4,
    name: "Artes",
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const user = useSelector(selectCurrentUser);
  const onChangeSearch = (query) => setSearchQuery(query);

  console.warn(user);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Searchbar value={searchQuery} onChange={onChangeSearch} />
        <SpotlightCarrousel cards={data} />
        <CategoryCarrousel data={chips} />
        <OfferButtonCarrousel />
        <EventCardCarrousel isTitled hasContent />
      </ScrollView>
    </Container>
  );
};

export default Home;
