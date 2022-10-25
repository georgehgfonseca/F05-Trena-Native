import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "./rootNavigation";

export default function useNotifications() {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationReceivedListener((notification) => {
      navigation.navigate("Account");
      console.log(notification);
    });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };

}