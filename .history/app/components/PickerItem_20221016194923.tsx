import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

interface PickerItemProps {
  label: string;
}

export default function PickerItem({ label }: PickerItemProps) {
  return (
    <TouchableOpacity>
      <AppText></AppText>
    </TouchableOpacity>
  );
}
