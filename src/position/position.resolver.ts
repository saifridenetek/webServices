import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PositionService } from './position.service';
import { Position } from './position.entity';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';

@Resolver(() => Position)
export class PositionResolver {
  constructor(private readonly service: PositionService) {}

  @Mutation(() => Position)
  createPosition(@Args('input') input: CreatePositionInput) {
    return this.service.create(input);
  }

  @Query(() => [Position])
  positions() {
    return this.service.findAll();
  }

  @Query(() => Position)
  position(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Position)
  updatePosition(@Args('input') input: UpdatePositionInput) {
    return this.service.update(input);
  }

  @Mutation(() => Boolean)
  removePosition(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
