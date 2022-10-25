import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import PublicWorkCollectsScreen from "../screens/PublicWorkCollectsScreen";
import PublicWorksScreen from "../screens/PublicWorksScreen";
import routes from "./routes";
import CollectEditScreen from "../screens/CollectEditScreen";
import GetPhotoScreen from "../screens/GetPhotoScreen";
import GetPhotoScreen2 from "../screens/GetPhotoScreen2";

const Stack = createStackNavigator();
export default function PublicWorksNavigator() {
  return (
    <Stack.Navigator
      mode="modal"
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Stack.Screen name={routes.PUBLIC_WORKS} component={PublicWorksScreen} />
      <Stack.Screen
        name={routes.PUBLIC_WORK_COLLECTS}
        component={PublicWorkCollectsScreen}
      />
      <Stack.Screen name={routes.COLLECT_EDIT} component={CollectEditScreen} />
      <Stack.Screen name={routes.GET_PHOTO} component={GetPhotoScreen2} />
    </Stack.Navigator>
  );
}
