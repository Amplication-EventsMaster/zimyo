import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bio" source="bio" />
        <div />
        <BooleanInput label="Hide Branding" source="hideBranding" />
        <TextInput label="Logo" source="logo" />
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
