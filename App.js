import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import PlaceList from "./src/components/placeList/PlaceList";
import PlaceInput from "./src/components/placeInput/PlaceInput";
// import placeImage from "./src/assets/beautiful-place.jpg";

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
        places: prevState.places.concat({
          key: prevState.places.length.toString(),
          name: prevState.placeName,
          image: {
            uri:
              "https://cdn.muenchen-p.de/image/fetch/c_scale,w_1180/c_crop,g_center,h_442,w_1180/https://www.muenchen.de/media/shutterstock-2017/sehenswuerdigkeiten-2/rathaus-sonne-hp.jpg",
          },
        }),
      };
    });
  };

  placeDeleteHandler = (key) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
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
