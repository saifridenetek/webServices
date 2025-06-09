import { Application } from 'src/application/application.entity';
export declare class Position {
    id: number;
    title: string;
    type: string;
    description: string;
    applications: Application[];
}
