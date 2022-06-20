import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SearchBar } from "@rneui/themed";
import { mealsAndDates } from "../../utils/helpers/mealsAndDates";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { taskData } from "../../../assets/utils/taskData";

const DetailsScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(taskData);
  console.log("users items", users);

  const userStatus = useSelector((state) => state.user);
  const { active, superActive, bored, dateRange } = userStatus;

  const navigation = useNavigation();

  const updatedUserData = mealsAndDates(dateRange);

  useEffect(() => {
    if (searchTerm !== "") {
      const filteredUser =
        typeof updatedUserData[0] !== "undefined" &&
        updatedUserData.filter((user) =>
          Object.values(user.profile.name)
            .join("")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      setUsers(filteredUser);
    } else {
      setUsers(updatedUserData);
    }
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.filter}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Feather name="edit" size={24} color="black" />
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <SearchBar
          searchIcon={{ size: 24 }}
          onChangeText={(text) => setSearchTerm(text)}
          onClear={(text) => setSearchTerm("")}
          placeholder="Type Here..."
          value={searchTerm}
          inputStyle={{ backgroundColor: "white" }}
          containerStyle={{
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 5,
          }}
          inputContainerStyle={{ backgroundColor: "white" }}
          placeholderTextColor={"#g5g5g5"}
        />
      </View>

      {/* <ScrollView style={{ marginTop: 10 }}>
        {users.map((user, index) => {
          return bored !== 0 && bored > user.mealTaken ? (
            <UsersCard key={index} user={user} />
          ) : active !== 0 && active > user.mealTaken && user.mealTaken >= 5 ? (
            <UsersCard key={index} user={user} />
          ) : superActive !== 0 && user.mealTaken >= superActive ? (
            <UsersCard key={index} user={user} />
          ) : null;
        })}
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 10,
  },
});

export default DetailsScreen;
