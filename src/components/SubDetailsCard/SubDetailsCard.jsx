import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const SubDetailsCard = ({ user }) => {
  return (
    <View style={styles.container}>
    <View>
      <View
        style={[
          styles.batchContainer,
          {
            backgroundColor:
              user?.mealTaken >= 10
                ? "tomato"
                : user?.mealTaken < 10 && user?.mealTaken >= 5
                ? "green"
                : user?.mealTaken < 5 && "red",
          },
        ]}
      >
        <Text style={styles.batchText}>
          {user?.mealTaken >= 10
            ? "Super Active"
            : user?.mealTaken < 10 && user?.mealTaken >= 5
            ? "Active"
            : "Bored"}
        </Text>
      </View>
      <View
        style={[
          styles.mealContainer,
          {
            backgroundColor: "#FF7F50",
          },
        ]}
      >
        <Text style={styles.batchText}>{user.mealTaken} Meals</Text>
      </View>
      <Image
        source={{
          uri: user?.profile?.pictureUrl,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text>{user?.profile?.name}</Text>
        <Text>
          User Id:{" "}
          {
            user?.calendar.daysWithDetails[
              Object.keys(user?.calendar.daysWithDetails)[0]
            ].day.userId
          }
        </Text>
      </View>
    </View>
  </View>
  )
}

export default SubDetailsCard

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      margin: 20,
      position: "relative",
    },
    batchContainer: {
      padding: 10,
      paddingHorizontal: 10,
      position: "absolute",
      right: 10,
      top: 10,
      zIndex: 999,
      borderRadius: 10,
    },
    batchText: {
      textAlign: "center",
      paddingVertical: 5,
      color: "white",
    },
    image: {
      width: "100%",
      height: 150,
    },
    textContainer: {
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    mealContainer: {
      padding: 10,
      paddingHorizontal: 10,
      position: "absolute",
      left: 10,
      top: 10,
      zIndex: 999,
      borderRadius: 10,
    },
  });