import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type HashedLinkWhereInput = {
  eventTypeId?: IntFilter;
  id?: IntFilter;
  link?: StringFilter;
};
