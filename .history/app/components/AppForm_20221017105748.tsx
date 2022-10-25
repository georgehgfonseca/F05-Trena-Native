import React from "react";
import { Formik } from "formik";

interface AppFormProps {
  initialValues: object;
  onSubmit: () => void;
  validationSchema: object;
  children?: JSX.Element[];
}
export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: any) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
