import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const HashedLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Event Type ID" source="eventTypeId" />
        <TextInput label="Link" source="link" />
      </SimpleForm>
    </Edit>
  );
};
