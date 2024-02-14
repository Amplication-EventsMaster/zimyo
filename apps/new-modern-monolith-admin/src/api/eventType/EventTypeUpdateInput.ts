import { AvailabilityUpdateManyWithoutEventTypesInput } from "./AvailabilityUpdateManyWithoutEventTypesInput";
import { InputJsonValue } from "../../types";
import { EventTypeCustomInputUpdateManyWithoutEventTypesInput } from "./EventTypeCustomInputUpdateManyWithoutEventTypesInput";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { UserUpdateManyWithoutEventTypesInput } from "./UserUpdateManyWithoutEventTypesInput";
import { WebhookUpdateManyWithoutEventTypesInput } from "./WebhookUpdateManyWithoutEventTypesInput";
import { WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput } from "./WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput";

export type EventTypeUpdateInput = {
  afterEventBuffer?: number;
  availability?: AvailabilityUpdateManyWithoutEventTypesInput;
  beforeEventBuffer?: number;
  bookings?: InputJsonValue;
  currency?: string;
  customInputs?: EventTypeCustomInputUpdateManyWithoutEventTypesInput;
  description?: string | null;
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;
  disableGuests?: boolean;
  eventName?: string | null;
  hashedLink?: number | null;
  hidden?: boolean;
  hideCalendarNotes?: boolean;
  length?: number;
  locations?: InputJsonValue;
  metadata?: InputJsonValue;
  minimumBookingNotice?: number;
  periodCountCalendarDays?: boolean | null;
  periodDays?: number | null;
  periodEndDate?: Date | null;
  periodStartDate?: Date | null;
  periodType?: "UNLIMITED" | "ROLLING" | "RANGE";
  position?: number;
  price?: number;
  recurringEvent?: InputJsonValue;
  requiresConfirmation?: boolean;
  schedule?: ScheduleWhereUniqueInput | null;
  schedulingType?: "ROUND_ROBIN" | "COLLECTIVE" | null;
  seatsPerTimeSlot?: number | null;
  slotInterval?: number | null;
  slug?: string;
  successRedirectUrl?: string | null;
  team?: number | null;
  timeZone?: string | null;
  title?: string;
  userId?: number | null;
  users?: UserUpdateManyWithoutEventTypesInput;
  webhooks?: WebhookUpdateManyWithoutEventTypesInput;
  workflows?: WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput;
};
