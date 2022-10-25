import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          // borderWidth: 10,
          // borderRadius: 50,
          // borderColor: "royalblue",
          // elevation: 20,
        }}
      >
        <View style={{ backgroundColor: "gold", width: 50, height: 50 }}></View>
      </View>
      <View style={{}}></View>
    </View>
  );
}
