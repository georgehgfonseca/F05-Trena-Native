import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache"
const store = async (key: string, value: any) => {
  try {
    const item = {value, timestamp: Date.now()}
    await AsyncStorage.setItem(prefix + key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export default {
  store
}