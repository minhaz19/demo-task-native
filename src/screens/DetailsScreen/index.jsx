import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DetailsScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    width: "100%",
  },
});

export default DetailsScreen;
