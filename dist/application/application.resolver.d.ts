import { ApplicationService } from './application.service';
import { Application } from './application.entity';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
export declare class ApplicationResolver {
    private readonly applicationService;
    constructor(applicationService: ApplicationService);
    createApplication(input: CreateApplicationInput): Promise<Application>;
    applicationsByStatus(status: string): Promise<Application[]>;
    findAll(): Promise<Application[]>;
    findOne(id: number): Promise<Application>;
    updateApplication(input: UpdateApplicationInput): Promise<Application>;
    removeApplication(id: number): Promise<boolean>;
    applicationsByCandidate(candidateId: number): Promise<Application[]>;
}
