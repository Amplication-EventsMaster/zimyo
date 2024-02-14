import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AttendeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Booking" source="booking" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Locale" source="locale" />
        <TextField label="Name" source="name" />
        <TextField label="Time Zone" source="timeZone" />
      </SimpleShowLayout>
    </Show>
  );
};
