import { Module } from '@nestjs/common';
import { DecisionHistoryService } from './decision-history.service';
import { DecisionHistoryResolver } from './decision-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DecisionHistory } from './decision-history.entity';
import { Application } from 'src/application/application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DecisionHistory, Application])],
  providers: [DecisionHistoryService, DecisionHistoryResolver],
})
export class DecisionHistoryModule {}
