import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const PlaceDetail = (props) => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.placeImage} source={props.selectedPlace.image} />
        <Text style={styles.placename}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onItemClose}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View>{modalContent}</View>
        <Button title="Delete" color="red" onPress={props.onItemDeleted} />
        <Button title="Close" onPress={props.onItemClosed} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: "100%",
    height: 200,
  },
  placename: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },
});
export default PlaceDetail;
