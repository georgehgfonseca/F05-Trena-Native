import React from "react";
import { StyleSheet } from "react-native";

export default function ActivityIndicatior({ visible = false }) {
  if (!visible) return null;
  return <div></div>;
}

const styles = StyleSheet.create({});
