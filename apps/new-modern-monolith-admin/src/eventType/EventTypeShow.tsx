import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { EVENTTYPE_TITLE_FIELD } from "./EventTypeTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";

export const EventTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="After Event Buffer" source="afterEventBuffer" />
        <TextField label="Before Event Buffer" source="beforeEventBuffer" />
        <TextField label="Bookings" source="bookings" />
        <TextField label="Currency" source="currency" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Destination Calendar"
          source="destinationcalendar.id"
          reference="DestinationCalendar"
        >
          <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Disable Guests" source="disableGuests" />
        <TextField label="Event Name" source="eventName" />
        <TextField label="Hashed Link" source="hashedLink" />
        <BooleanField label="Hidden" source="hidden" />
        <BooleanField label="Hide Calendar Notes" source="hideCalendarNotes" />
        <TextField label="ID" source="id" />
        <TextField label="Length" source="length" />
        <TextField label="Locations" source="locations" />
        <TextField label="Metadata" source="metadata" />
        <TextField
          label="Minimum Booking Notice"
          source="minimumBookingNotice"
        />
        <BooleanField
          label="Period Count Calendar Days"
          source="periodCountCalendarDays"
        />
        <TextField label="Period Days" source="periodDays" />
        <TextField label="Period End Date" source="periodEndDate" />
        <TextField label="Period Start Date" source="periodStartDate" />
        <TextField label="Period Type" source="periodType" />
        <TextField label="Position" source="position" />
        <TextField label="Price" source="price" />
        <TextField label="Recurring Event" source="recurringEvent" />
        <BooleanField
          label="Requires Confirmation"
          source="requiresConfirmation"
        />
        <ReferenceField
          label="Schedule"
          source="schedule.id"
          reference="Schedule"
        >
          <TextField source={SCHEDULE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Scheduling Type" source="schedulingType" />
        <TextField label="Seats Per Time Slot" source="seatsPerTimeSlot" />
        <TextField label="Slot Interval" source="slotInterval" />
        <TextField label="Slug" source="slug" />
        <TextField label="Success Redirect Url" source="successRedirectUrl" />
        <TextField label="Team" source="team" />
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Title" source="title" />
        <TextField label="User Id" source="userId" />
        <ReferenceManyField
          reference="Availability"
          target="eventTypeId"
          label="Availabilities"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="Days" source="days" />
            <TextField label="End Time" source="endTime" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Time" source="startTime" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EventTypeCustomInput"
          target="eventTypeId"
          label="EventTypeCustomInputs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Label" source="label" />
            <TextField label="Placeholder" source="placeholder" />
            <BooleanField label="Required" source="required" />
            <TextField label="Type" source="type" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Webhook"
          target="eventTypeId"
          label="Webhooks"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Active" source="active" />
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Event Triggers" source="eventTriggers" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Payload Template" source="payloadTemplate" />
            <TextField label="Secret" source="secret" />
            <TextField label="Subscriber Url" source="subscriberUrl" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkflowsOnEventType"
          target="eventTypeId"
          label="WorkflowsOnEventTypes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Workflow"
              source="workflow.id"
              reference="Workflow"
            >
              <TextField source={WORKFLOW_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
