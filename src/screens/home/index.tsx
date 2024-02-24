import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

import { Container } from "../../components/container";
import { SearchBar } from "../../components/searchbar";
import { EventCardCarousel } from "../../components/event-card-carousel";
import { CategoryCarousel } from "../../components/category-carrousel";

import { api } from "../../services/api";

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const onChangeSearch = (query) => setSearchQuery(query);

  const { data, refetch } = api.useFindAllEventsQuery();

  const { data: categories, refetch: categoriesRefetch } =
    api.useFindAllCategoriesQuery();

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    Promise.all([refetch, categoriesRefetch]).finally(() => {
      setRefreshing(false);
    });
  }, [refetch, categoriesRefetch]);

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
        <OfferButtonCarrousel />*/}

        <CategoryCarousel data={categories} />

        <EventCardCarousel data={data} title="Em Alta" hasContent />
      </ScrollView>
    </Container>
  );
};
