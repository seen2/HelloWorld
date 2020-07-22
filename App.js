import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import PlaceList from "./src/components/placeList/PlaceList";
import PlaceInput from "./src/components/placeInput/PlaceInput";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: [],
  };

  placeNameChangeHandler = (val) => {
    this.setState({ placeName: val });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;
    this.setState((prevState) => {
      return {
        places: prevState.places.concat(prevState.placeName),
      };
    });
  };

  placeDeleteHandler = (index) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place, ind) => {
          return ind != index;
        }),
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <PlaceInput
            placeNameChangeHandler={this.placeNameChangeHandler}
            placeName={this.state.placeName}
          />
          <Button
            style={styles.placeButton}
            title="Add"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <PlaceList
          onItemDeleted={this.placeDeleteHandler}
          places={this.state.places}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  placeButton: {
    width: "30%",
  },
});
