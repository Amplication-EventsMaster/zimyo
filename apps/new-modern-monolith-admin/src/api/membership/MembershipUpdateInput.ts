import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipUpdateInput = {
  accepted?: boolean;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: number;
  user?: UserWhereUniqueInput;
};
