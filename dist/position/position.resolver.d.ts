import { PositionService } from './position.service';
import { Position } from './position.entity';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';
export declare class PositionResolver {
    private readonly service;
    constructor(service: PositionService);
    createPosition(input: CreatePositionInput): Promise<Position>;
    positions(): Promise<Position[]>;
    position(id: number): Promise<Position | null>;
    updatePosition(input: UpdatePositionInput): Promise<Position>;
    removePosition(id: number): Promise<boolean>;
}
