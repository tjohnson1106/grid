import React from "react";
import { StyleSheet, Image } from "react-native";

const Banner = () => {
  return (
    <Image source={require("../img/banner_image.jpg")} style={styles.root} />
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Banner;
