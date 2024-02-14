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
import { TeamWhereInput } from "./TeamWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TeamListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TeamWhereInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereInput)
  @IsOptional()
  @Field(() => TeamWhereInput, {
    nullable: true,
  })
  every?: TeamWhereInput;

  @ApiProperty({
    required: false,
    type: () => TeamWhereInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereInput)
  @IsOptional()
  @Field(() => TeamWhereInput, {
    nullable: true,
  })
  some?: TeamWhereInput;

  @ApiProperty({
    required: false,
    type: () => TeamWhereInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereInput)
  @IsOptional()
  @Field(() => TeamWhereInput, {
    nullable: true,
  })
  none?: TeamWhereInput;
}
export { TeamListRelationFilter as TeamListRelationFilter };