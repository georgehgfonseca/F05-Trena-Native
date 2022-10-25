import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import colors from '../config/colors';

export function components() {
  return (
    <Button style={styles.button}>

    </Button>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      color: colors.white,
      height: 70,
      width: "100%",
      borderRadius: 
    },
  });