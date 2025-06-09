import { Repository } from 'typeorm';
import { Position } from './position.entity';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';
export declare class PositionService {
    private repo;
    constructor(repo: Repository<Position>);
    create(input: CreatePositionInput): Promise<Position>;
    findAll(): Promise<Position[]>;
    findOne(id: number): Promise<Position | null>;
    update(input: UpdatePositionInput): Promise<Position>;
    remove(id: number): Promise<boolean>;
}
