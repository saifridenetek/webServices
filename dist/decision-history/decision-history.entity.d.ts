import { Application } from 'src/application/application.entity';
export declare class DecisionHistory {
    id: number;
    status: string;
    date: Date;
    comment: string;
    application: Application;
}
