import React from "react";
import { Modal, StyleSheet, View } from "react-native";

export default function UploadScreen(props: any) {
  return (
    <Modal>
      <View style={styles.container}></View>
    </Modal>
  );
}

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
