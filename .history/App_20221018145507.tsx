import { Button, Text } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails")}
    ></Button>
  );
};

const Tweets = ({ navigation }: any) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    ></Button>
  </Screen>
);

const TweetDetails = ({ route }: any) => (
  // useRoute()
  <Screen>
    <Text>Tweet details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerShown: false,
      }}
      // options={({ route }: any) => ({ title: route.params.id })}
    ></Stack.Screen>
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen name="Account" component={Account}></Tab.Screen>
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <StackNavigator></StackNavigator> */}
    </NavigationContainer>
  );
}

// const [imageUris, setImageUris] = useState<string[]>([]);

// const handleAdd = (uri: string) => {
//   setImageUris([...imageUris, uri]);
// };

// const handleRemove = (uri: string) => {
//   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
// };

// const requestPermission = async () => {
//   // const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION_BACKGROUND)
//   const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   if (!granted) alert("You need to enable permission to access the library");
// };
{
  /* <Screen>
<ImageInputList
  imageUris={imageUris}
  onAddImage={handleAdd}
  onRemoveImage={handleRemove}
></ImageInputList>
</Screen> */
}

// useEffect(() => {
//   requestPermission();
// }, []);

// const selectImage = async () => {
//   try {
//     const result = await ImagePicker.launchImageLibraryAsync();
//     if (!result.cancelled) setImageUri(result.uri);
//   } catch (error) {
//     console.log("Error reasing an image", error);
//   }
// };

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];
{
  /* <Button title="Select image" onPress={selectImage}></Button>
<Image
  source={{ uri: imageUri }}
  style={{ width: 200, height: 200 }}
></Image> */
}

// <Screen>
//   <AppPicker
//     selectedItem={category}
//     onSelectItem={(item: Category) => setCategory(item)}
//     items={categories}
//     icon="apps"
//     placeholder="Category"
//   ></AppPicker>
//   <AppTextInput icon="email" placeholder="Email"></AppTextInput>
// </Screen>
// <MyAccountScreen
//   name="George Fonseca"
//   email="george.fons@gmail.com"
//   image={require("./app/assets/george.jpeg")}
// ></MyAccountScreen>
// const [firstName, setFirstName] = useState<string>("");
// const [isNew, setIsNew] = useState<boolean>(false);
{
  /* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */
}
{
  /* <Input
containerStyle={{}}
disabledInputStyle={{ backgroundColor: "#dddddd" }}
inputContainerStyle={{}}
errorMessage="Oops! that's not correct."
errorStyle={{}}
errorProps={{}}
inputStyle={{}}
label="User Form"
labelStyle={{}}
labelProps={{}}
leftIcon={<Icon name="account-outline" size={20} />}
leftIconContainerStyle={{}}
rightIcon={<Icon name="close" size={20} />}
rightIconContainerStyle={{}}
placeholder="Enter Name"
/> */
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
