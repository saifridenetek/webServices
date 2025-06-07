import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDecisionHistoryInput } from './dto/create-decision-history.input';
import { UpdateDecisionHistoryInput } from './dto/update-decision-history.input';
import { DecisionHistory } from './decision-history.entity';
import { Application } from 'src/application/application.entity';

@Injectable()
export class DecisionHistoryService {
  constructor(
    @InjectRepository(DecisionHistory)
    private repo: Repository<DecisionHistory>,
    @InjectRepository(Application)
    private appRepo: Repository<Application>,
  ) {}

  async create(input: CreateDecisionHistoryInput): Promise<DecisionHistory> {
    const application = await this.appRepo.findOneBy({ id: input.applicationId });
    if (!application) throw new NotFoundException('Application not found');

    const history = this.repo.create({
      ...input,
      application,
    });

    return this.repo.save(history);
  }

  findAll(): Promise<DecisionHistory[]> {
    return this.repo.find({ relations: ['application'] });
  }

  findByApplication(applicationId: number): Promise<DecisionHistory[]> {
    return this.repo.find({ where: { application: { id: applicationId } } });
  }
}
