import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.root}>
      <Image
        source={require("../img/header_image.jpg")}
        style={styles.headerImageStyle}
      />
      <Text style={style.logo}>Photo Layout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 80,
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc"
  },
  headerImageStyle: {
    width: 40,
    height: 40
  },
  logo: {
    fontSize: 20,
    marginLeft: 10,
    fontStyle: "italic",
    color: "#292929"
  }
});

export default Header;
