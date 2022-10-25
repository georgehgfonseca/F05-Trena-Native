import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import PublicWorksScreen from "../screens/PublicWorksScreen";
import routes from "./routes";

const Stack = createStackNavigator();
export default function PublicWorksNavigator() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.PUBLIC_WORKS} component={PublicWorksScreen} />
      <Stack.Screen
        name={routes.PUBLIC_WORK_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}
