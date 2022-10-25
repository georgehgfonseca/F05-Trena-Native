import React from "react";
import LottieView from "lottie-react-native"

export default function ActivityIndicatior({ visible = false }) {
  if (!visible) return null;
  return <LottieView loop source={require("../assets/animations/loader.json")}></View>;
}
