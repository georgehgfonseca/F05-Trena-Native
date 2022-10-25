import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableHighlight,
  GestureResponderEvent,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

interface ListItemProps {
  title: string;
  subTitle: string;
  image?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
  renderRightActions?: any;
}
function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}: ListItemProps) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
          <View style={styles.container}>
            {image && <Image style={styles.image} source={image}></Image>}
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: colors.white,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 10,
  },
  subTitle: {
    color: colors.gray,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
