import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DailyEventReferenceWhereUniqueInput } from "../dailyEventReference/DailyEventReferenceWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { BookingReferenceListRelationFilter } from "../bookingReference/BookingReferenceListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BookingWhereInput = {
  attendees?: JsonFilter;
  cancellationReason?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  customInputs?: JsonFilter;
  dailyRef?: DailyEventReferenceWhereUniqueInput;
  description?: StringNullableFilter;
  destinationCalendarId?: IntNullableFilter;
  dynamicEventSlugRef?: StringNullableFilter;
  dynamicGroupSlugRef?: StringNullableFilter;
  endTime?: DateTimeFilter;
  eventTypeId?: IntNullableFilter;
  fromReschedule?: StringNullableFilter;
  id?: IntFilter;
  location?: StringNullableFilter;
  paid?: BooleanFilter;
  payment?: PaymentListRelationFilter;
  recurringEventId?: StringNullableFilter;
  references?: BookingReferenceListRelationFilter;
  rejectionReason?: StringNullableFilter;
  rescheduled?: BooleanNullableFilter;
  smsReminderNumber?: StringNullableFilter;
  startTime?: DateTimeFilter;
  status?: "CANCELLED" | "ACCEPTED" | "REJECTED" | "PENDING";
  title?: StringFilter;
  uid?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
  userId?: IntNullableFilter;
  workflowReminders?: JsonFilter;
};