import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

export default function UploadScreen({ progress = 0, visible = false }: any) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
