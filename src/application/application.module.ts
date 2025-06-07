import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationResolver } from './application.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './application.entity';
import { Candidate } from 'src/candidate/candidate.entity';
import { Position } from 'src/position/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application, Candidate, Position])],
  providers: [ApplicationResolver, ApplicationService],
})
export class ApplicationModule {}
