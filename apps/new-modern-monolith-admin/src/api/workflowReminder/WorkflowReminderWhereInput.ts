import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { WorkflowStepWhereUniqueInput } from "../workflowStep/WorkflowStepWhereUniqueInput";

export type WorkflowReminderWhereInput = {
  booking?: IntNullableFilter;
  id?: IntFilter;
  method?: "EMAIL" | "SMS";
  referenceId?: StringNullableFilter;
  scheduled?: BooleanFilter;
  scheduledDate?: DateTimeFilter;
  workflowStep?: WorkflowStepWhereUniqueInput;
};
