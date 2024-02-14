import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bio" source="bio" />
        <TextField label="Event Types" source="eventTypes" />
        <BooleanField label="Hide Branding" source="hideBranding" />
        <TextField label="ID" source="id" />
        <TextField label="Logo" source="logo" />
        <TextField label="Members" source="members" />
        <TextField label="Name" source="name" />
        <TextField label="Slug" source="slug" />
      </SimpleShowLayout>
    </Show>
  );
};
