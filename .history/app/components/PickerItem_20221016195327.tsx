import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

interface PickerItemProps {
  label: string;
  onPress: () => void;
}

export default function PickerItem({ label, onPress }: PickerItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppTextstyle={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,

    }
})