import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import {
  setActive,
  setBored,
  setSuperActive,
} from "../../../store/slices/userSlice";

const SubHomeCheckbox = () => {
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(true);

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user);
  const { active, superActive, bored } = userStatus;

  return (
    <>
      <Text style={{ color: "#59a6a6", fontSize: 20, fontWeight: "bold" }}>
        Status
      </Text>
      <View style={styles.borderLine} />

      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          right={false}
          checkedColor={"#59a6a6"}
          uncheckedColor={"gray"}
          size={20}
          title={"Active"}
          checked={checkbox1 || active !== 0}
          onPress={() => {
            setCheckbox1(!checkbox1);
            dispatch(setActive(!checkbox1 ? 10 : 0));
          }}
          containerStyle={{
            paddingVertical: 2,
          }}
          textStyle={styles.checkboxTextStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          right={false}
          checkedColor={"#59a6a6"}
          uncheckedColor={"gray"}
          size={20}
          title={"Super Active"}
          checked={checkbox2 || superActive !== 0}
          onPress={() => {
            setCheckbox2(!checkbox2);
            dispatch(setSuperActive(!checkbox2 ? 10 : 0));
          }}
          containerStyle={{
            paddingVertical: 2,
          }}
          textStyle={styles.checkboxTextStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          right={false}
          checkedColor={"#59a6a6"}
          uncheckedColor={"gray"}
          title={"Bored"}
          size={20}
          checked={checkbox3 || bored !== 0}
          onPress={() => {
            setCheckbox3(!checkbox3);
            dispatch(setBored(!checkbox3 ? 5 : 0));
          }}
          containerStyle={{
            paddingVertical: 2,
          }}
          textStyle={styles.checkboxTextStyle}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  borderLine: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 6,
  },
  checkboxContainer: {
    width: "100%",
  },
  checkboxTextStyle: {
    fontSize: 16,
    fontWeight: "normal",
    color: "gray",
  },
});

export default SubHomeCheckbox;
