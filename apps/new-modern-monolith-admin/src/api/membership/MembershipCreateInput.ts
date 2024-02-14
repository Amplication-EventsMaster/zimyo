import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipCreateInput = {
  accepted: boolean;
  role: "MEMBER" | "ADMIN" | "OWNER";
  team: number;
  user: UserWhereUniqueInput;
};
