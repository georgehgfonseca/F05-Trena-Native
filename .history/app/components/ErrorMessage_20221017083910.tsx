import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

export default function ErrorMessage({ error }: any) {
  return <AppText>{error}</AppText>;
}

const styles = StyleSheet.create({});
