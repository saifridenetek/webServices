import { CreatePositionInput } from './create-position.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePositionInput extends PartialType(CreatePositionInput) {
  @Field(() => Int)
  id: number;
}
