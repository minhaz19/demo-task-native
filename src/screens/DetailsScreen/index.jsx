import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchBar } from "@rneui/themed";
import { mealsAndDates } from "../../utils/helpers/mealsAndDates";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { taskData } from "../../../assets/utils/taskData";
import SubDetailsCard from "../../components/SubDetailsCard/SubDetailsCard";

const DetailsScreen = () => {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState(taskData);

  const userStatus = useSelector((state) => state.user);
  const { active, superActive, bored, rangeOfDates } = userStatus;

  const navigation = useNavigation();

  const updatedData = mealsAndDates(rangeOfDates);

  useEffect(() => {
    if (search !== "" || search !== undefined) {
      const filteredUser =
        typeof updatedData[0] !== "undefined" &&
        updatedData.filter((user) =>
          Object.values(user.profile.name)
            .join("")
            .toUpperCase()
            .includes(search.toUpperCase())
        );
      setUsers(filteredUser);
    } else {
      setUsers(updatedData);
    }
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editView}>
        <TouchableOpacity
          style={styles.filter}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text>Edit Filter</Text>
          <Ionicons name="filter-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <SearchBar
          searchIcon={{ size: 24 }}
          onChangeText={(text) => setSearch(text)}
          onClear={(text) => setSearch("")}
          placeholder="Search"
          value={search}
          inputStyle={{ backgroundColor: "white" }}
          containerStyle={{
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 5,
          }}
          inputContainerStyle={{ backgroundColor: "white" }}
          placeholderTextColor={"gray"}
        />
      </View>

      <ScrollView style={{ marginTop: 10 }}>
        {users.map((user, index) => {
          return bored !== 0 && bored > user.mealTaken ? (
            <SubDetailsCard key={index} user={user} />
          ) : active !== 0 && active > user.mealTaken && user.mealTaken >= 5 ? (
            <SubDetailsCard key={index} user={user} />
          ) : superActive !== 0 && user.mealTaken >= superActive ? (
            <SubDetailsCard key={index} user={user} />
          ) : null;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 30,
  },
  editView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default DetailsScreen;
