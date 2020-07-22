import React from "react";
import { TextInput, StyleSheet } from "react-native";

const PlaceInput = ({ placeName, placeNameChangeHandler }) => (
  <TextInput
    style={styles.placeInput}
    onChangeText={placeNameChangeHandler}
    placeholder="An Awesome Place"
    value={placeName}
  />
);

const styles = StyleSheet.create({
  placeInput: {
    width: "70%",
  },
});

export default PlaceInput;
