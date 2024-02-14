import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";

export type TeamWhereInput = {
  bio?: StringNullableFilter;
  eventTypes?: JsonFilter;
  hideBranding?: BooleanFilter;
  id?: IntFilter;
  logo?: StringNullableFilter;
  members?: JsonFilter;
  name?: StringNullableFilter;
  slug?: StringNullableFilter;
};
