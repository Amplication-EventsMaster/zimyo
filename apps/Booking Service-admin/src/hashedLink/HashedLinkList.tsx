import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HashedLinkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HashedLinks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Event Type ID" source="eventTypeId" />
        <TextField label="ID" source="id" />
        <TextField label="Link" source="link" />
      </Datagrid>
    </List>
  );
};
