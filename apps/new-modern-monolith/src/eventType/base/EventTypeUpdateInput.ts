/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  ValidateNested,
  IsString,
  IsBoolean,
  IsDate,
  IsEnum,
} from "class-validator";
import { AvailabilityUpdateManyWithoutEventTypesInput } from "./AvailabilityUpdateManyWithoutEventTypesInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EventTypeCustomInputUpdateManyWithoutEventTypesInput } from "./EventTypeCustomInputUpdateManyWithoutEventTypesInput";
import { DestinationCalendarWhereUniqueInput } from "../../destinationCalendar/base/DestinationCalendarWhereUniqueInput";
import { EnumEventTypePeriodType } from "./EnumEventTypePeriodType";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";
import { EnumEventTypeSchedulingType } from "./EnumEventTypeSchedulingType";
import { UserUpdateManyWithoutEventTypesInput } from "./UserUpdateManyWithoutEventTypesInput";
import { WebhookUpdateManyWithoutEventTypesInput } from "./WebhookUpdateManyWithoutEventTypesInput";
import { WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput } from "./WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput";

@InputType()
class EventTypeUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  afterEventBuffer?: number;

  @ApiProperty({
    required: false,
    type: () => AvailabilityUpdateManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => AvailabilityUpdateManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => AvailabilityUpdateManyWithoutEventTypesInput, {
    nullable: true,
  })
  availability?: AvailabilityUpdateManyWithoutEventTypesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  beforeEventBuffer?: number;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  bookings?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string;

  @ApiProperty({
    required: false,
    type: () => EventTypeCustomInputUpdateManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => EventTypeCustomInputUpdateManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => EventTypeCustomInputUpdateManyWithoutEventTypesInput, {
    nullable: true,
  })
  customInputs?: EventTypeCustomInputUpdateManyWithoutEventTypesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DestinationCalendarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DestinationCalendarWhereUniqueInput)
  @IsOptional()
  @Field(() => DestinationCalendarWhereUniqueInput, {
    nullable: true,
  })
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  disableGuests?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  eventName?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  hashedLink?: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  hidden?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  hideCalendarNotes?: boolean;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  length?: number;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  locations?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  metadata?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minimumBookingNotice?: number;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  periodCountCalendarDays?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  periodDays?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  periodEndDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  periodStartDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumEventTypePeriodType,
  })
  @IsEnum(EnumEventTypePeriodType)
  @IsOptional()
  @Field(() => EnumEventTypePeriodType, {
    nullable: true,
  })
  periodType?: "UNLIMITED" | "ROLLING" | "RANGE";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  position?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  recurringEvent?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  requiresConfirmation?: boolean;

  @ApiProperty({
    required: false,
    type: () => ScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScheduleWhereUniqueInput)
  @IsOptional()
  @Field(() => ScheduleWhereUniqueInput, {
    nullable: true,
  })
  schedule?: ScheduleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumEventTypeSchedulingType,
  })
  @IsEnum(EnumEventTypeSchedulingType)
  @IsOptional()
  @Field(() => EnumEventTypeSchedulingType, {
    nullable: true,
  })
  schedulingType?: "ROUND_ROBIN" | "COLLECTIVE" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  seatsPerTimeSlot?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  slotInterval?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  slug?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  successRedirectUrl?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  team?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  timeZone?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  userId?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutEventTypesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutEventTypesInput;

  @ApiProperty({
    required: false,
    type: () => WebhookUpdateManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => WebhookUpdateManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => WebhookUpdateManyWithoutEventTypesInput, {
    nullable: true,
  })
  webhooks?: WebhookUpdateManyWithoutEventTypesInput;

  @ApiProperty({
    required: false,
    type: () => WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput, {
    nullable: true,
  })
  workflows?: WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput;
}

export { EventTypeUpdateInput as EventTypeUpdateInput };
