import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { WORKFLOWSTEP_TITLE_FIELD } from "../workflowStep/WorkflowStepTitle";

export const WorkflowReminderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Booking" source="booking" />
        <TextField label="ID" source="id" />
        <TextField label="Method" source="method" />
        <TextField label="Reference Id" source="referenceId" />
        <BooleanField label="Scheduled" source="scheduled" />
        <TextField label="Scheduled Date" source="scheduledDate" />
        <ReferenceField
          label="Workflow Step"
          source="workflowstep.id"
          reference="WorkflowStep"
        >
          <TextField source={WORKFLOWSTEP_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
