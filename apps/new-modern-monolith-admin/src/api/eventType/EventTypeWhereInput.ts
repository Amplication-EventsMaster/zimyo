import { IntFilter } from "../../util/IntFilter";
import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { EventTypeCustomInputListRelationFilter } from "../eventTypeCustomInput/EventTypeCustomInputListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";
import { WorkflowsOnEventTypeListRelationFilter } from "../workflowsOnEventType/WorkflowsOnEventTypeListRelationFilter";

export type EventTypeWhereInput = {
  afterEventBuffer?: IntFilter;
  availability?: AvailabilityListRelationFilter;
  beforeEventBuffer?: IntFilter;
  bookings?: JsonFilter;
  currency?: StringFilter;
  customInputs?: EventTypeCustomInputListRelationFilter;
  description?: StringNullableFilter;
  destinationCalendar?: DestinationCalendarWhereUniqueInput;
  disableGuests?: BooleanFilter;
  eventName?: StringNullableFilter;
  hashedLink?: IntNullableFilter;
  hidden?: BooleanFilter;
  hideCalendarNotes?: BooleanFilter;
  id?: IntFilter;
  length?: IntFilter;
  locations?: JsonFilter;
  metadata?: JsonFilter;
  minimumBookingNotice?: IntFilter;
  periodCountCalendarDays?: BooleanNullableFilter;
  periodDays?: IntNullableFilter;
  periodEndDate?: DateTimeNullableFilter;
  periodStartDate?: DateTimeNullableFilter;
  periodType?: "UNLIMITED" | "ROLLING" | "RANGE";
  position?: IntFilter;
  price?: IntFilter;
  recurringEvent?: JsonFilter;
  requiresConfirmation?: BooleanFilter;
  schedule?: ScheduleWhereUniqueInput;
  schedulingType?: "ROUND_ROBIN" | "COLLECTIVE";
  seatsPerTimeSlot?: IntNullableFilter;
  slotInterval?: IntNullableFilter;
  slug?: StringFilter;
  successRedirectUrl?: StringNullableFilter;
  team?: IntNullableFilter;
  timeZone?: StringNullableFilter;
  title?: StringFilter;
  userId?: IntNullableFilter;
  users?: UserListRelationFilter;
  webhooks?: WebhookListRelationFilter;
  workflows?: WorkflowsOnEventTypeListRelationFilter;
};
