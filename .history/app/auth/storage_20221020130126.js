import * as SecureStore from "expo-secure-store"

const key = "authToken";

const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error)
    
  }

}