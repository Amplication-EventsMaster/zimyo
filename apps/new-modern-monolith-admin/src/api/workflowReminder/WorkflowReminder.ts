import { WorkflowStep } from "../workflowStep/WorkflowStep";

export type WorkflowReminder = {
  booking: number | null;
  id: number;
  method?: "EMAIL" | "SMS";
  referenceId: string | null;
  scheduled: boolean;
  scheduledDate: Date;
  workflowStep?: WorkflowStep;
};
