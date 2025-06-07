import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDecisionHistoryInput {
  @Field()
  status: string;

  @Field()
  date: Date;

  @Field()
  comment: string;

  @Field(() => Int)
  applicationId: number;
}
