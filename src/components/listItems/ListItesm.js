import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ placeName, onItemPressed }) => (
  <TouchableOpacity style={styles.listItem} onPress={onItemPressed}>
    <View>
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
  },
});

export default ListItem;
