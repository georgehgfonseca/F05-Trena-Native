import React from "react";
import { useFormikContext, FormikErrors } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

// interface AppFormPickerProps {
//   name: string;
//   [x: string]: any;
// }

export default function AppFormPicker({
  icon,
  items,
  name,
  onSelectItem,
  placeholder,
  selectedItem,
}: any) {
  const args = useFormikContext();
  return (
    <>
      <AppPicker
        icon={icon}
        items={items}
        onSelectItem={onSelectItem}
        selectedItem={selectedItem}
        placeholder={placeholder}
        // onBlur={() => args.setFieldTouched(name)}
        // onChangeText={args.handleChange(name)}
        // {...otherProps}
      ></AppPicker>
      <ErrorMessage
        error={args.errors[name]}
        visible={args.touched[name]}
      ></ErrorMessage>
    </>
  );
}
