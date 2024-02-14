import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipWhereInput = {
  accepted?: BooleanFilter;
  id?: IntFilter;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: IntFilter;
  user?: UserWhereUniqueInput;
};
