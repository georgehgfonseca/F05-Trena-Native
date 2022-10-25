import React from "react";

export default function AppForm(props) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values: any) => console.log(values)}
      validationSchema={validationSchema}
    ></Formik>
  );
}
