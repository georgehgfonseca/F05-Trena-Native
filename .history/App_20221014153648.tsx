import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const [firstName, setFirstName] = useState<string>("");
  return (
    <Screen>
      <AppTextInput icon="trash"></AppTextInput>
    </Screen>
    // <MyAccountScreen
    //   name="George Fonseca"
    //   email="george.fons@gmail.com"
    //   image={require("./app/assets/george.jpeg")}
    // ></MyAccountScreen>
  );
}

// <Text>{firstName}</Text>
// <TextInput
//   secureTextEntry
//   // clearButtonMode="always" // iOS only
//   keyboardType="numeric"
//   maxLength={10}
//   onChangeText={(text) => setFirstName(text)}
//   placeholder="First name"
//   style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
// ></TextInput>
// <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
//   <Card
//     title="Red jacket for sale"
//     subTitle="$100"
//     image={require("./app/assets/jacket.jpg")}
//   ></Card>
// </View>
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ImageBackground,
//   SafeAreaView,
//   TouchableHighlight,
//   Button,
//   Alert,
//   Platform,
//   StatusBar,
//   Dimensions,
// } from "react-native";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//   </View>
{
  /* <AppButton text="LOGIN" color={colors.primary}></AppButton>
      <AppButton text="REGISTER" color={colors.secondary}></AppButton> */
}
{
  /* <AppText>I love React Native!</AppText> */
}
{
  /* <MaterialCommunityIcons
        size={60}
        color="dodgerblue"
        name="email"
      ></MaterialCommunityIcons> */
}
{
  /* <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
          // borderWidth: 10,
          // borderRadius: 50,
          // borderColor: "royalblue",
          // elevation: 20,
        }}
      >
        <View style={{ backgroundColor: "gold", width: 50, height: 50 }}></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
        }}
      ></View> */
}
