import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DestinationCalendarWhereInput = {
  booking?: IntNullableFilter;
  credential?: CredentialWhereUniqueInput;
  eventType?: EventTypeWhereUniqueInput;
  externalId?: StringFilter;
  id?: IntFilter;
  integration?: StringFilter;
  user?: UserWhereUniqueInput;
};
