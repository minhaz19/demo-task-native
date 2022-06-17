import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ReusableButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    backgroundColor: "#59a6a6",
    borderRadius: 6,
    marginTop: 20,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});

export default ReusableButton;
