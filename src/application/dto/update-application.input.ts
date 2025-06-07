import { CreateApplicationInput } from './create-application.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateApplicationInput extends PartialType(CreateApplicationInput) {
  @Field(() => Int)
  id: number;
}
