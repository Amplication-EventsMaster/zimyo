import { JsonValue } from "type-fest";

export type Team = {
  bio: string | null;
  eventTypes: JsonValue;
  hideBranding: boolean;
  id: number;
  logo: string | null;
  members: JsonValue;
  name: string | null;
  slug: string | null;
};
