import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Content extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.colOne}>{}</View>
        <View style={styles.colTwo}>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  }
});

export default Content;
