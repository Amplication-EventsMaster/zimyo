import { SortOrder } from "../../util/SortOrder";

export type AttendeeOrderByInput = {
  booking?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  locale?: SortOrder;
  name?: SortOrder;
  timeZone?: SortOrder;
};
