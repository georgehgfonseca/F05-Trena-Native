import React from "react";
import AppButton from "./AppButton";

export default function SubmitButton(props) {
  return <AppButton title="Login" onPress={handleSubmit}></AppButton>;
}
