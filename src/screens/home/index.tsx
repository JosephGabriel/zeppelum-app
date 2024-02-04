import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

import { Container } from "../../components/container";
import { SearchBar } from "../../components/searchbar";
import { EventCardCarousel } from "../../components/event-card-carousel";

import { api } from "../../services/api";

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const onChangeSearch = (query) => setSearchQuery(query);

  const { data, refetch } = api.useFindAllEventsQuery();

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    refetch().finally(() => {
      setRefreshing(false);
    });
  }, [refetch]);

  return (
    <Container>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <SearchBar
          placeholder={"Pesquisar"}
          value={searchQuery}
          onChange={onChangeSearch}
        />
        {/*
        <SpotlightCarrousel cards={data} />
        <OfferButtonCarrousel />
        <CategoryCarrousel data={chips} />
        */}
        <EventCardCarousel data={data} title="Em Alta" hasContent />
      </ScrollView>
    </Container>
  );
};
