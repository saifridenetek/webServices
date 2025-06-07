import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateApplicationInput {
  @Field()
  candidateId: number;

  @Field()
  positionId: number;

  @Field()
  status: string;
}
