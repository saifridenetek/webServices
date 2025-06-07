import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './candidate.entity';
import { CreateCandidateInput } from './dto/create-candidate.input';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepo: Repository<Candidate>,
  ) {}

  create(input: CreateCandidateInput): Promise<Candidate> {
    const candidate = this.candidateRepo.create(input);
    return this.candidateRepo.save(candidate);
  }

  findAll(): Promise<Candidate[]> {
    return this.candidateRepo.find({ relations: ['applications'] });
  }
}
