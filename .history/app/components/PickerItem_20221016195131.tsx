import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

interface PickerItemProps {
  label: string;
  onPress: () => void;
}

export default function PickerItem({ label, onPress }: PickerItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}
