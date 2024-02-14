import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const MembershipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Accepted" source="accepted" />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "MEMBER", value: "MEMBER" },
            { label: "ADMIN", value: "ADMIN" },
            { label: "OWNER", value: "OWNER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Team" source="team" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
