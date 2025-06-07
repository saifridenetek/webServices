import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DecisionHistoryService } from './decision-history.service';
import { CreateDecisionHistoryInput } from './dto/create-decision-history.input';
import { DecisionHistory } from './decision-history.entity';

@Resolver(() => DecisionHistory)
export class DecisionHistoryResolver {
  constructor(private readonly service: DecisionHistoryService) {}

  @Mutation(() => DecisionHistory)
  createDecision(@Args('input') input: CreateDecisionHistoryInput) {
    return this.service.create(input);
  }

  @Query(() => [DecisionHistory])
  decisionHistory() {
    return this.service.findAll();
  }

  @Query(() => [DecisionHistory])
  decisionHistoryByApplication(@Args('applicationId', { type: () => Int }) id: number) {
    return this.service.findByApplication(id);
  }
}
