import AsyncStorage from "@react-native-async-storage/async-storage";

const store = (key: string, value: any) => {
  AsyncStorage.setItem("cache" + key)
}

export default {
  store
}