import { Application } from 'src/application/application.entity';
export declare class Candidate {
    id: number;
    applications: Application[];
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    cvUrl?: string;
}
