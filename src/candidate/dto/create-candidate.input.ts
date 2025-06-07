import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCandidateInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  cvUrl?: string;
}
