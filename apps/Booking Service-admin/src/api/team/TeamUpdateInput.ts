import { InputJsonValue } from "../../types";

export type TeamUpdateInput = {
  bio?: string | null;
  eventTypes?: InputJsonValue;
  hideBranding?: boolean;
  logo?: string | null;
  members?: InputJsonValue;
  name?: string | null;
  slug?: string | null;
};