import React, { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, TouchableWithoutFeedback } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import CategoryPickerItem from "./CategoryPickerItem";
import ListItemSeparator from "./ListItemSeparator";
import AppButton from "./AppButton";

export default function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = CategoryPickerItem,
  selectedItem,
  placeholder,
  width = "100%",
}: any) {
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
            <AppText style={styles.text}>{selectedItem.name}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <AppButton
            title="Fechar"
            onPress={() => setModalVisible(false)}
          ></AppButton>
          <FlatList
            data={items}
            keyExtractor={(item) => item.name.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              ></PickerItemComponent>
            )}
            ItemSeparatorComponent={ListItemSeparator}
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
