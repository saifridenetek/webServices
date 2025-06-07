import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePositionInput {
  @Field()
  title: string;

  @Field()
  type: string; // stage or emploi

  @Field()
  description: string;
}
