import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AttendeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Booking" source="booking" />
        <TextInput label="Email" source="email" />
        <TextInput label="Locale" source="locale" />
        <TextInput label="Name" source="name" />
        <TextInput label="Time Zone" source="timeZone" />
      </SimpleForm>
    </Create>
  );
};
