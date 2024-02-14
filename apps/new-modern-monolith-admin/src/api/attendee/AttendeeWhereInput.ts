import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttendeeWhereInput = {
  booking?: IntNullableFilter;
  email?: StringFilter;
  id?: IntFilter;
  locale?: StringNullableFilter;
  name?: StringFilter;
  timeZone?: StringFilter;
};
