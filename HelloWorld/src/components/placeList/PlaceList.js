import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ListItem from "../listItems/ListItesm";

const PlaceList = (props) => {
  const placesOutput = props.places.map((place, index) => (
    <ListItem
      placeName={place}
      key={index}
      onItemPressed={() => props.onItemDeleted(index)}
    >
      {place}
    </ListItem>
  ));

  return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
});

export default PlaceList;
