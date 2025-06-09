import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { Candidate } from 'src/candidate/candidate.entity';
import { Position } from 'src/position/position.entity';
export declare class ApplicationService {
    private applicationRepo;
    private candidateRepo;
    private positionRepo;
    constructor(applicationRepo: Repository<Application>, candidateRepo: Repository<Candidate>, positionRepo: Repository<Position>);
    create(input: CreateApplicationInput): Promise<Application>;
    findByStatus(status: string): Promise<Application[]>;
    findAll(): Promise<Application[]>;
    findOne(id: number): Promise<Application>;
    update(id: number, input: UpdateApplicationInput): Promise<Application>;
    remove(id: number): Promise<boolean>;
    findByCandidate(candidateId: number): Promise<Application[]>;
}
