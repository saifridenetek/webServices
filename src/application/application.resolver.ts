import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApplicationService } from './application.service';
import { Application } from './application.entity';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';

@Resolver(() => Application)
export class ApplicationResolver {
  constructor(private readonly applicationService: ApplicationService) {}

  @Mutation(() => Application)
  createApplication(@Args('input') input: CreateApplicationInput) {
    return this.applicationService.create(input);
  }

  @Query(() => [Application], { name: 'applications' })
  findAll() {
    return this.applicationService.findAll();
  }

  @Query(() => Application, { name: 'application' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.applicationService.findOne(id);
  }

  @Mutation(() => Application)
  updateApplication(@Args('input') input: UpdateApplicationInput) {
    return this.applicationService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  removeApplication(@Args('id', { type: () => Int }) id: number) {
    return this.applicationService.remove(id);
  }

  @Query(() => [Application])
  applicationsByCandidate(@Args('candidateId', { type: () => Int }) candidateId: number) {
    return this.applicationService.findByCandidate(candidateId);
  }
}
