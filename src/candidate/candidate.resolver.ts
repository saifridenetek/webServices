import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CandidateService } from './candidate.service';
import { Candidate } from './candidate.entity';
import { CreateCandidateInput } from './dto/create-candidate.input';

@Resolver(() => Candidate)
export class CandidateResolver {
  constructor(private service: CandidateService) {}

  @Query(() => [Candidate])
  candidates(): Promise<Candidate[]> {
    return this.service.findAll();
  }

  @Mutation(() => Candidate)
  createCandidate(
    @Args('input') input: CreateCandidateInput,
  ): Promise<Candidate> {
    return this.service.create(input);
  }
}
