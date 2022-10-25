import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import styles from "./styles";

// <Heading>My Heading</Heading>
function AppText(props: any) {
  return <Text style={styles.text}>{props.children}</Text>;
}

export default AppText;
