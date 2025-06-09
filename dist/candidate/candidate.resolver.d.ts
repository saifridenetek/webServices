import { CandidateService } from './candidate.service';
import { Candidate } from './candidate.entity';
import { CreateCandidateInput } from './dto/create-candidate.input';
export declare class CandidateResolver {
    private service;
    constructor(service: CandidateService);
    candidates(): Promise<Candidate[]>;
    createCandidate(input: CreateCandidateInput): Promise<Candidate>;
}
