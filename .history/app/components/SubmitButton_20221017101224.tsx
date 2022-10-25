import React from "react";

import AppButton from "./AppButton";

interface SubmitButtonProps {
    title: string;
}
export default function SubmitButton({title} : ) {
  return <AppButton title="Login" onPress={handleSubmit}></AppButton>;
}
