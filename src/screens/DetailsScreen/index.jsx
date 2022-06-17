import React from "react";
import { Text, View, StyleSheet } from "react-native";
const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
  },
});

export default DetailsScreen;
