import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AttendeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Booking" source="booking" />
        <TextInput label="Email" source="email" />
        <TextInput label="Locale" source="locale" />
        <TextInput label="Name" source="name" />
        <TextInput label="Time Zone" source="timeZone" />
      </SimpleForm>
    </Edit>
  );
};
