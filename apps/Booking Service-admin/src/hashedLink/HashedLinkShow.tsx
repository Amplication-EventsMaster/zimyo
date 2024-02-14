import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const HashedLinkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Event Type ID" source="eventTypeId" />
        <TextField label="ID" source="id" />
        <TextField label="Link" source="link" />
      </SimpleShowLayout>
    </Show>
  );
};
