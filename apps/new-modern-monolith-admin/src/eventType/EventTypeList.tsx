import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const EventTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EventTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
