import React, { useState } from "react";
import { ScrollView } from "react-native";

import Container from "../../components/Container";
import Searchbar from "../../components/Searchbar";
import CategoryCarrousel from "../../components/CategoryCarrousel";
import SpotlightCarrousel from "../../components/SpotlightCarrousel";
import EventCardCarrousel from "../../components/event-card-carousel";
import OfferButtonCarrousel from "../../components/OfferButtonCarrousel";

import { api } from "../../services/api";

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

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const { currentData } = api.useFindAllEventsQuery(undefined, {
    refetchOnFocus: true,
  });

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Searchbar value={searchQuery} onChange={onChangeSearch} />
        <SpotlightCarrousel cards={data} />
        <CategoryCarrousel data={chips} />
        <OfferButtonCarrousel />
        <EventCardCarrousel data={currentData} isTitled hasContent />
      </ScrollView>
    </Container>
  );
};
