import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKFLOWSTEP_TITLE_FIELD } from "../workflowStep/WorkflowStepTitle";

export const WorkflowReminderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkflowReminders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
