import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { Candidate } from 'src/candidate/candidate.entity';
import { Position } from 'src/position/position.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private applicationRepo: Repository<Application>,
    @InjectRepository(Candidate)
    private candidateRepo: Repository<Candidate>,
    @InjectRepository(Position)
    private positionRepo: Repository<Position>,
  ) {}

  async create(input: CreateApplicationInput): Promise<Application> {
    const candidate = await this.candidateRepo.findOneBy({ id: input.candidateId });
    const position = await this.positionRepo.findOneBy({ id: input.positionId });

    if (!candidate || !position) {
      throw new NotFoundException('Candidate or Position not found');
    }

    const application = this.applicationRepo.create({
      ...input,
      candidate,
      position,
      createdAt: new Date(),
    });

    return this.applicationRepo.save(application);
  }

  findAll(): Promise<Application[]> {
    return this.applicationRepo.find();
  }

  async findOne(id: number): Promise<Application> {
    const app = await this.applicationRepo.findOneBy({ id });
    if (!app) {
      throw new NotFoundException(`Application with id ${id} not found`);
    }
    return app;
  }

  async update(id: number, input: UpdateApplicationInput): Promise<Application> {
    const application = await this.applicationRepo.preload({ ...input, id });
    if (!application) {
      throw new NotFoundException(`Application with ID ${id} not found`);
    }
    return this.applicationRepo.save(application);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.applicationRepo.delete(id);
    if (!result.affected || result.affected === 0) {
        throw new NotFoundException(`No record found to delete with ID ${id}`);
      }
    return result.affected > 0;
  }

  async findByCandidate(candidateId: number): Promise<Application[]> {
    return this.applicationRepo.find({
      where: { candidate: { id: candidateId } },
    });
  }
}
