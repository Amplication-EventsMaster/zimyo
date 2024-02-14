export type AttendeeCreateInput = {
  booking?: number | null;
  email: string;
  locale?: string | null;
  name: string;
  timeZone: string;
};
