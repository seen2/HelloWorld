import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";

import ListItem from "../listItems/ListItesm";

const PlaceList = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.value}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
});

export default PlaceList;
