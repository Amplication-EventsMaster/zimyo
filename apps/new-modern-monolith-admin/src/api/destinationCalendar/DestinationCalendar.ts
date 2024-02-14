import { Credential } from "../credential/Credential";
import { EventType } from "../eventType/EventType";
import { User } from "../user/User";

export type DestinationCalendar = {
  booking: number | null;
  credential?: Credential | null;
  eventType?: EventType | null;
  externalId: string;
  id: number;
  integration: string;
  user?: User | null;
};
