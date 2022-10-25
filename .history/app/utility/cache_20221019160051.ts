import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache"
const store = (key: string, value: any) => {
  AsyncStorage.setItem(prefix + key);
}

export default {
  store
}