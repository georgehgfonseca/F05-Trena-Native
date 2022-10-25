import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      // headerStyle: { backgroundColor: "dodgerblue" },
      // headerTintColor: "white",
    }}
  >
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}></Stack.Screen>
    <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
    ></Stack.Screen>

    {/* <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerShown: false,
      }}
      // options={({ route }: any) => ({ title: route.params.id })}
    ></Stack.Screen> */}
  </Stack.Navigator>
);
