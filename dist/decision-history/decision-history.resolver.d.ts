import { DecisionHistoryService } from './decision-history.service';
import { CreateDecisionHistoryInput } from './dto/create-decision-history.input';
import { DecisionHistory } from './decision-history.entity';
export declare class DecisionHistoryResolver {
    private readonly service;
    constructor(service: DecisionHistoryService);
    createDecision(input: CreateDecisionHistoryInput): Promise<DecisionHistory>;
    decisionHistory(): Promise<DecisionHistory[]>;
    decisionHistoryByApplication(id: number): Promise<DecisionHistory[]>;
}
