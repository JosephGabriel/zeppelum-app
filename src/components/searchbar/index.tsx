import React from "react";
import { Searchbar } from "react-native-paper";

interface Props {
  value: string;
  onChange: (t: string) => void;
  placeholder: string;
}

export const SearchBar = ({ placeholder, value, onChange }: Props) => {
  return (
    <Searchbar
      autoCompleteType={false}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      style={{ margin: 20 }}
    />
  );
};
