import { SortOrder } from "../../util/SortOrder";

export type DestinationCalendarOrderByInput = {
  booking?: SortOrder;
  credentialId?: SortOrder;
  eventTypeId?: SortOrder;
  externalId?: SortOrder;
  id?: SortOrder;
  integration?: SortOrder;
  userId?: SortOrder;
};
