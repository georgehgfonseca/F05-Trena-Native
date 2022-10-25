import Constants from "expo-constants"

const settings = {
  dev: {
    apiUrl: "http://192.168.31.154:8000/",
    // apiUrl: "http://192.168.31.154:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.31.154:8000/",
  },
  prod: {
    apiUrl: "http://192.168.31.154:8000/",
  },
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest?.releaseChannel === "staging") return settings.staging;
  return settings.prod;
}

export default getCurrentSettings();