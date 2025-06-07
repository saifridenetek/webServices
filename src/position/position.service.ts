import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from './position.entity';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private repo: Repository<Position>,
  ) {}

  create(input: CreatePositionInput): Promise<Position> {
    const position = this.repo.create(input);
    return this.repo.save(position);
  }

  findAll(): Promise<Position[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<Position | null> {
    return this.repo.findOneBy({ id });
  }

  async update(input: UpdatePositionInput): Promise<Position> {
    const position = await this.repo.preload(input);
    if (!position) throw new NotFoundException('Position not found');
    return this.repo.save(position);
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.repo.delete(id);
    if (!res.affected || res.affected === 0) {
        throw new NotFoundException(`No record found to delete with ID ${id}`);
      }
    return res.affected > 0;
  }
}
