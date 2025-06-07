import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './candidate.entity';
import { CandidateService } from './candidate.service';
import { CandidateResolver } from './candidate.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Candidate])],
  providers: [CandidateService, CandidateResolver],
})
export class CandidateModule {}
