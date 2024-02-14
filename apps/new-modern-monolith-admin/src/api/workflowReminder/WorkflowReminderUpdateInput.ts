import { WorkflowStepWhereUniqueInput } from "../workflowStep/WorkflowStepWhereUniqueInput";

export type WorkflowReminderUpdateInput = {
  booking?: number | null;
  method?: "EMAIL" | "SMS";
  referenceId?: string | null;
  scheduled?: boolean;
  scheduledDate?: Date;
  workflowStep?: WorkflowStepWhereUniqueInput;
};
