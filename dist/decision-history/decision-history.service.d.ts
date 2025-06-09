import { Repository } from 'typeorm';
import { CreateDecisionHistoryInput } from './dto/create-decision-history.input';
import { DecisionHistory } from './decision-history.entity';
import { Application } from 'src/application/application.entity';
export declare class DecisionHistoryService {
    private repo;
    private appRepo;
    constructor(repo: Repository<DecisionHistory>, appRepo: Repository<Application>);
    create(input: CreateDecisionHistoryInput): Promise<DecisionHistory>;
    findAll(): Promise<DecisionHistory[]>;
    findByApplication(applicationId: number): Promise<DecisionHistory[]>;
}
