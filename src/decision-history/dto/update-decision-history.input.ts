import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDecisionHistoryInput } from './create-decision-history.input';

@InputType()
export class UpdateDecisionHistoryInput extends PartialType(CreateDecisionHistoryInput) {
  @Field(() => Int)
  id: number;
}
