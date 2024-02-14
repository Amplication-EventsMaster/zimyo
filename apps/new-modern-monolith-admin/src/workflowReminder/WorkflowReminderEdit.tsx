import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { WorkflowStepTitle } from "../workflowStep/WorkflowStepTitle";

export const WorkflowReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
