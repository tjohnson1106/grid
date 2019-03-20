import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import Header from "./Header";
import Banner from "./Banner";

class Main extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={styles.root}>
        <Header />
        <Banner />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Main;
