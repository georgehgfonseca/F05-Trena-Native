import React, { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, TouchableWithoutFeedback } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import { Category } from "../../App";

interface AppPickerProps {
  icon?: any;
  items: any;
  onSelectItem: (item: Category) => void;
  selectedItem: Category | undefined;
  placeholder: string;
  width: any;
}
export default function AppPicker({
  icon,
  items,
  onSelectItem,
  selectedItem,
  placeholder,
  width = "100%",
}: AppPickerProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            ></MaterialCommunityIcons>
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          {/* <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText> */}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              ></PickerItem>
            )}
          ></FlatList>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 24,
    flexDirection: "row",
    padding: 12,
    marginVertical: 12,
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
  text: {
    flex: 1,
  },
});
