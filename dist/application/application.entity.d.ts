import { Candidate } from 'src/candidate/candidate.entity';
import { DecisionHistory } from 'src/decision-history/decision-history.entity';
import { Position } from 'src/position/position.entity';
export declare class Application {
    id: number;
    status: string;
    createdAt: Date;
    candidate: Candidate;
    position: Position;
    decisionHistory: DecisionHistory[];
}
