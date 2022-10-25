import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import useNotifications from "../hooks/useNotifications";
import PublicWorksNavigator from "./PublicWorksNavigator";
import InspectionsNavigator from "./InspectionsNavigator";
import colors from "../config/colors";
const Tab = createBottomTabNavigator();

export default function TrenaNavigator() {
  useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.INSPECTIONS}
        component={InspectionsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="magnify-expand"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PUBLIC_WORKS}
        component={PublicWorksNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-hard-hat"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MAP}
        component={PublicWorksNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-marker-radius"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={colors.medium}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
