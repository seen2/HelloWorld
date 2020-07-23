import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = ({ placeName, onItemPressed, placeImage }) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="contain" style={styles.placeImg} source={placeImage} />
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  placeImg: {
    marginRight: 8,
    // alignItems: "center",
    width: 60,
    height: 30,
  },
});

export default ListItem;
