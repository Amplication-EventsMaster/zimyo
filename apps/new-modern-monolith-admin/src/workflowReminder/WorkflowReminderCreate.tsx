import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { WorkflowStepTitle } from "../workflowStep/WorkflowStepTitle";

export const WorkflowReminderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Booking" source="booking" />
        <SelectInput
          source="method"
          label="Method"
          choices={[
            { label: "EMAIL", value: "EMAIL" },
            { label: "SMS", value: "SMS" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Reference Id" source="referenceId" />
        <BooleanInput label="Scheduled" source="scheduled" />
        <DateTimeInput label="Scheduled Date" source="scheduledDate" />
        <ReferenceInput
          source="workflowStep.id"
          reference="WorkflowStep"
          label="Workflow Step"
        >
          <SelectInput optionText={WorkflowStepTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
