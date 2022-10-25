import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    text: {
      color: "tomato",
      fontSize: 18,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    //   ...Platform.select({
    //     ios: {
    //       fontSize: 20,
    //       fontFamily: "Avenir",
    //     },
    //     android: {
    //       fontSize: 18,
    //       fontFamily: "Roboto",
    //     },
    //   }),
  
    },
  });
  
  