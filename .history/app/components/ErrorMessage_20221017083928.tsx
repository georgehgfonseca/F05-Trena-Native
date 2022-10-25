import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

export default function ErrorMessage({ error }: any) {
  if (!error) return null;
  return <AppText>{error}</AppText>;
}

const styles = StyleSheet.create({});
