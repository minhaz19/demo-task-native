import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Modal } from "react-native";
import DatePicker from "react-native-styled-datepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  setEndingDate,
  setRangeOfDates,
  setStartingDate,
} from "../../../store/slices/userSlice";
import { _rangeDate } from "../../utils/helpers/_rangeDate";

const InputBox = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [endCalendar, setEndCalendar] = useState(false);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  //   dispatch and get the state from the reducer
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user);
  const { startingDate, endingDate } = userStatus;

  const handleOpenCalendar = () => {
    setOpenCalendar(true);
    setModalVisible(true);
  };

  const handleEndCalendar = () => {
    setEndCalendar(true);
    setModalVisible(true);
  };

  useEffect(() => {
    // get the range of date
    dateRange =
      startDate !== undefined &&
      endDate !== undefined &&
      _rangeDate(startDate, endDate);

    // make the date into a formate like yyyy-mm-dd
    const unorderedRange =
      dateRange &&
      dateRange?.map(
        (date, i) =>
          new Date(date).getFullYear() +
          "-" +
          parseInt(new Date(date).getMonth() + 1) +
          "-" +
          new Date(date).getDate()
      );

    let orderRange = [];
    unorderedRange &&
      unorderedRange.map((date) =>
        orderRange.push(
          date
            .split("-")
            .map((d) => (parseInt(d) <= 9 ? "0" + d : d))
            .join("-")
        )
      );
    unorderedRange && dispatch(setRangeOfDates(orderRange));
  }, [startDate, endDate]);

  return (
    <>
      <Text style={{ color: "#59a6a6", fontSize: 20, fontWeight: "bold" }}>
        Date
      </Text>
      <View style={styles.borderLine} />
      <View style={styles.formDate}>
        <Text style={{ color: "#59a6a6", fontSize: 16 }}>From</Text>
        <TextInput
          onPressIn={handleOpenCalendar}
          style={styles.input}
          placeholder="From"
          readOnly
          defaultValue={startingDate}
        />
      </View>
      <View style={styles.formDate}>
        <Text style={{ color: "#59a6a6", fontSize: 16 }}>To</Text>
        <TextInput
          onPressIn={handleEndCalendar}
          style={styles.input}
          placeholder="To"
          readOnly
          //   editable={false}
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
                initialSelectedDate={startDate}
                onChange={(e) => {
                  dispatch(setStartingDate(e));
                  setStartDate(e);
                  setOpenCalendar(false);
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </Modal>
      )}
      {endCalendar && (
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
                initialSelectedDate={endDate}
                onChange={(e) => {
                  dispatch(setEndingDate(e));
                  setEndDate(e);
                  setEndCalendar(false);
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
    width: "85%",
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

export default InputBox;
