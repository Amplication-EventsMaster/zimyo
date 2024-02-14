import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AttendeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Attendees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Booking" source="booking" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Locale" source="locale" />
        <TextField label="Name" source="name" />
        <TextField label="Time Zone" source="timeZone" />
      </Datagrid>
    </List>
  );
};
