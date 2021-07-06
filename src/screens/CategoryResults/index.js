import React from "react";
import { ScrollView,View } from "react-native";
import { Headline } from "react-native-paper";
  
import EventCardCarrousel from "../../components/EventCardCarrousel"; 

const CategoryResults = ({route}) => {
  const {name} = route.params
  return (
    <View padding={20} height={'100%'}>
       <Headline style={{ fontWeight: "bold", marginBottom: 20 }}>
       {name}
      </Headline> 
      <ScrollView showsVerticalScrollIndicator={false}> 
        <EventCardCarrousel />
        <EventCardCarrousel />
        <EventCardCarrousel />
        <EventCardCarrousel />
      </ScrollView>
    </View>
  );
};

export default CategoryResults;
