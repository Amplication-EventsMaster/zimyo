import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DailyEventReferenceTitle } from "../dailyEventReference/DailyEventReferenceTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { BookingReferenceTitle } from "../bookingReference/BookingReferenceTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Cancellation Reason" source="cancellationReason" />
        <div />
        <ReferenceInput
          source="dailyRef.id"
          reference="DailyEventReference"
          label="Daily Ref"
        >
          <SelectInput optionText={DailyEventReferenceTitle} />
        </ReferenceInput>
        <TextInput label="Description" source="description" />
        <NumberInput
          step={1}
          label="Destination Calendar ID"
          source="destinationCalendarId"
        />
        <TextInput
          label="Dynamic Event Slug Ref"
          source="dynamicEventSlugRef"
        />
        <TextInput
          label="Dynamic Group Slug Ref"
          source="dynamicGroupSlugRef"
        />
        <DateTimeInput label="End Time" source="endTime" />
        <NumberInput step={1} label="Event Type ID" source="eventTypeId" />
        <TextInput label="From Reschedule" source="fromReschedule" />
        <TextInput label="Location" source="location" />
        <BooleanInput label="Paid" source="paid" />
        <ReferenceArrayInput
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Recurring Event Id" source="recurringEventId" />
        <ReferenceArrayInput
          source="references"
          reference="BookingReference"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingReferenceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Rejection Reason" source="rejectionReason" />
        <BooleanInput label="Rescheduled" source="rescheduled" />
        <TextInput label="Sms Reminder Number" source="smsReminderNumber" />
        <DateTimeInput label="Start Time" source="startTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "CANCELLED", value: "CANCELLED" },
            { label: "ACCEPTED", value: "ACCEPTED" },
            { label: "REJECTED", value: "REJECTED" },
            { label: "PENDING", value: "PENDING" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
        <TextInput label="Uid" source="uid" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput step={1} label="User ID" source="userId" />
        <div />
      </SimpleForm>
    </Create>
  );
};
