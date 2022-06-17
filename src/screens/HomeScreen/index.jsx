import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import ReusableButton from "../../components/ReusableButton";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-styled-datepicker";

const status = [
  { id: 0, status: "Active", checked: false },
  { id: 1, status: "Super Active", checked: false },
  { id: 2, status: "Bored", checked: false },
];
const HomeScreen = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [endCalendar, setEndCalendar] = useState(false);
  const [startingDate, setStartingDate] = useState();
  const [endingDate, setEndingDate] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  const [checkbox1, setCheckbox1] = useState(status);
  const [checkbox2, setCheckbox2] = useState(status);
  const [checkbox3, setCheckbox3] = useState(status);

  const navigation = useNavigation();
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
        <Text style={{ color: "#59a6a6", fontSize: 20, fontWeight: "bold" }}>
          Date
        </Text>
        <View style={styles.borderLine} />
        <View style={styles.formDate}>
          <Text style={{ color: "#59a6a6", fontSize: 16 }}>From</Text>
          <TextInput
            onFocus={() => setOpenCalendar(true)}
            // onPressIn={() => setOpenCalendar(true)}
            onPressIn={() => setModalVisible(true)}
            onBlur={() => setOpenCalendar(false)}
            style={styles.input}
            placeholder="From"
            editable
            defaultValue={startingDate}
          />
        </View>
        <View style={styles.formDate}>
          <Text style={{ color: "#59a6a6", fontSize: 16 }}>To</Text>
          <TextInput
            onFocus={() => setEndCalendar(true)}
            onPressIn={() => setEndCalendar(true)}
            onBlur={() => setEndCalendar(false)}
            style={styles.input}
            placeholder="To"
            editable
            defaultValue={endingDate}
          />
        </View>
        {openCalendar && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  onChange={(e) => {
                    setStartingDate(e);
                    setOpenCalendar(false);
                    setModalVisible(!modalVisible)
                  }}
                />
              </View>
            </View>
          </Modal>
        )}
        {endCalendar && (
          <DatePicker
            onChange={(e) => {
              setEndingDate(e);
              setEndCalendar(false);
            }}
          />
        )}

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
            checked={checkbox1}
            onPress={() => {
              setCheckbox1(!checkbox1);
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
            checked={checkbox2}
            onPress={() => {
              setCheckbox2(!checkbox2);
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
            checked={checkbox3}
            onPress={() => {
              setCheckbox3(!checkbox3);
            }}
            containerStyle={{
              paddingVertical: 2,
            }}
            textStyle={styles.checkboxTextStyle}
          />
        </TouchableOpacity>

        <ReusableButton
          title={"Generate"}
          onPress={() => navigation.navigate("DetailsScreen")}
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
  formDate: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    borderColor: "#59a6a6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingVertical: 2,
  },

  checkboxContainer: {
    width: "100%",
  },
  checkboxTextStyle: {
    fontSize: 16,
    fontWeight: "normal",
    color: "gray",
  },
  borderLine: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 6,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomeScreen;
