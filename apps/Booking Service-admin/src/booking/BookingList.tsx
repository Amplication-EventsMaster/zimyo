import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DAILYEVENTREFERENCE_TITLE_FIELD } from "../dailyEventReference/DailyEventReferenceTitle";

export const BookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bookings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Attendees" source="attendees" />
        <TextField label="Cancellation Reason" source="cancellationReason" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Custom Inputs" source="customInputs" />
        <ReferenceField
          label="Daily Ref"
          source="dailyeventreference.id"
          reference="DailyEventReference"
        >
          <TextField source={DAILYEVENTREFERENCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Description" source="description" />
        <TextField
          label="Destination Calendar ID"
          source="destinationCalendarId"
        />
        <TextField
          label="Dynamic Event Slug Ref"
          source="dynamicEventSlugRef"
        />
        <TextField
          label="Dynamic Group Slug Ref"
          source="dynamicGroupSlugRef"
        />
        <TextField label="End Time" source="endTime" />
        <TextField label="Event Type ID" source="eventTypeId" />
        <TextField label="From Reschedule" source="fromReschedule" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <BooleanField label="Paid" source="paid" />
        <TextField label="Recurring Event Id" source="recurringEventId" />
        <TextField label="Rejection Reason" source="rejectionReason" />
        <BooleanField label="Rescheduled" source="rescheduled" />
        <TextField label="Sms Reminder Number" source="smsReminderNumber" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Uid" source="uid" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="User ID" source="userId" />
        <TextField label="Workflow Reminders" source="workflowReminders" />
      </Datagrid>
    </List>
  );
};
