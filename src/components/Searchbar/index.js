import React from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ value, onChange }) => {
  return (
    <Searchbar
      value={value}
      onChangeText={onChange}
      placeholder="Pesquisar"
      style={{ margin: 20 }}
    />
  );
};

export default SearchBar;
