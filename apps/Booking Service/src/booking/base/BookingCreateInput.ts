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
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsString,
  ValidateNested,
  IsInt,
  IsDate,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { DailyEventReferenceWhereUniqueInput } from "../../dailyEventReference/base/DailyEventReferenceWhereUniqueInput";
import { Type } from "class-transformer";
import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";
import { BookingReferenceCreateNestedManyWithoutBookingsInput } from "./BookingReferenceCreateNestedManyWithoutBookingsInput";
import { EnumBookingStatus } from "./EnumBookingStatus";

@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  attendees?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cancellationReason?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  customInputs?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => DailyEventReferenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DailyEventReferenceWhereUniqueInput)
  @IsOptional()
  @Field(() => DailyEventReferenceWhereUniqueInput, {
    nullable: true,
  })
  dailyRef?: DailyEventReferenceWhereUniqueInput | null;

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
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  destinationCalendarId?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dynamicEventSlugRef?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dynamicGroupSlugRef?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  endTime!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  eventTypeId?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fromReschedule?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  paid!: boolean;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutBookingsInput, {
    nullable: true,
  })
  payment?: PaymentCreateNestedManyWithoutBookingsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recurringEventId?: string | null;

  @ApiProperty({
    required: false,
    type: () => BookingReferenceCreateNestedManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => BookingReferenceCreateNestedManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => BookingReferenceCreateNestedManyWithoutBookingsInput, {
    nullable: true,
  })
  references?: BookingReferenceCreateNestedManyWithoutBookingsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rejectionReason?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  rescheduled?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  smsReminderNumber?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startTime!: Date;

  @ApiProperty({
    required: true,
    enum: EnumBookingStatus,
  })
  @IsEnum(EnumBookingStatus)
  @Field(() => EnumBookingStatus)
  status!: "CANCELLED" | "ACCEPTED" | "REJECTED" | "PENDING";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  uid!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;

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
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  workflowReminders?: InputJsonValue;
}

export { BookingCreateInput as BookingCreateInput };
