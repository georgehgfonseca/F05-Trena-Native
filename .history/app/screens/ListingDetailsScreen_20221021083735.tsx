import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import * as Yup from "yup";
import messagesApi from "../api/messages";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default function ListingDetailsScreen({ route }: any) {
  const sendApi = useApi(messagesApi.send);
  const listing = route.params;

  const handleSubmit = async (messageInfo: any) => {
    Keyboard.dismiss();
    const result: any = await sendApi.request({
      message: messageInfo.message,
      listingId: listing.id,
    });
    console.log(result);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller");
    }
    resetForm();
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          style={styles.image}
          uri={listing.images[0].url}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
        ></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/george.jpeg")}
              title="George Fonseca"
              subTitle="5 Listings"
            ></ListItem>
          </View>
          <AppForm
            initialValues={{
              message: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="message"
              placeholder="Message..."
              // style={styles.message}
            ></AppFormField>
            <SubmitButton title="Contact Seller"></SubmitButton>
          </AppForm>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    font: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
