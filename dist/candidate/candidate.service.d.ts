import { Repository } from 'typeorm';
import { Candidate } from './candidate.entity';
import { CreateCandidateInput } from './dto/create-candidate.input';
export declare class CandidateService {
    private candidateRepo;
    constructor(candidateRepo: Repository<Candidate>);
    create(input: CreateCandidateInput): Promise<Candidate>;
    findAll(): Promise<Candidate[]>;
}
