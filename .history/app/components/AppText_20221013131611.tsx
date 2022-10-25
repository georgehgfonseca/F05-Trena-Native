import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

// <Heading>My Heading</Heading>
function AppText(props: any) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
        ios: {
          fontSize: 20,
          fontFamily: "Avenir",
        },
        android: {
          fontSize: 18,
          fontFamily: "Roboto",
        },
      });
      
      
    // fontSize: 18,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
