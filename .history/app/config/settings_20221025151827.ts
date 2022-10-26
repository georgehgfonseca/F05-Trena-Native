import Constants from "expo-constants"
import { environment } from "../../enviroment";

const settings = {
  dev: {
    apiUrl: environment.apiUrl,
    apiKey: environment.mpApiKey,
    // apiUrl: "http://192.168.31.154:8000/",
  },
  staging: {
    apiUrl: environment.apiUrl,
    // apiUrl: "http://192.168.31.154:8000/",
  },
  prod: {
    apiUrl: environment.apiUrl,
    // apiUrl: "http://192.168.31.154:8000/",
  },
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest?.releaseChannel === "staging") return settings.staging;
  return settings.prod;
}

export default getCurrentSettings();