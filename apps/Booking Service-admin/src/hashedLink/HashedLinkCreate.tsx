import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const HashedLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Event Type ID" source="eventTypeId" />
        <TextInput label="Link" source="link" />
      </SimpleForm>
    </Create>
  );
};
