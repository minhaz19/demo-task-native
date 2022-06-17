import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ReusableButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    alignItems: "center",
  },
  button: {
    paddingVertical: 15,
    backgroundColor: "#59a6a6",
    borderRadius: 6,
    marginTop: 20,
    width: "50%",
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
