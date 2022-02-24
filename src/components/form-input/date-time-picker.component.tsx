 import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "./date-picker.css";
import "react-datepicker/dist/react-datepicker.css"

export const DatePickerField = ({ ...props }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val: any) => {
        setFieldValue(field.name, val);
      }}
      {...props}
    />
  );
};
