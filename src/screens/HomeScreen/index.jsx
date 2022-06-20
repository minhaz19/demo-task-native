import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import ReusableButton from "../../components/ReusableButton";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../components/SubHomeScreen/InputBox";
import SubHomeCheckbox from "../../components/SubHomeCheckBox/SubHomeCheckbox";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const navigation = useNavigation();

  const userStatus = useSelector((state) => state.user);

  const buttonAlert = () =>
    Alert.alert("", "Please Select all date and status", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#59a6a6",
          fontSize: 24,
          fontWeight: "bold",
          paddingBottom: 10,
        }}
      >
        User Analyzer
      </Text>
      <Text
        style={{
          color: "gray",
          fontSize: 16,
          fontWeight: "normal",
          paddingBottom: 10,
        }}
      >
        Select Filters to generate report
      </Text>
      <View style={styles.fieldContainer}>
        <InputBox />
        <SubHomeCheckbox />
        <ReusableButton
          title={"Generate"}
          onPress={() => {
            typeof userStatus.rangeOfDates[0] !== "undefined" &&
              navigation.navigate("DetailsScreen");
            typeof userStatus.rangeOfDates[0] === "undefined" && buttonAlert();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  fieldContainer: {
    width: "90%",
    borderRadius: 4,
    borderColor: "#59a6a6",
    padding: 20,
    borderWidth: 1,
    margin: 10,
  },
});

export default HomeScreen;
