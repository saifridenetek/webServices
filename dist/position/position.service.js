"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const position_entity_1 = require("./position.entity");
let PositionService = class PositionService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    create(input) {
        const position = this.repo.create(input);
        return this.repo.save(position);
    }
    findAll() {
        return this.repo.find();
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    async update(input) {
        const position = await this.repo.preload(input);
        if (!position)
            throw new common_1.NotFoundException('Position not found');
        return this.repo.save(position);
    }
    async remove(id) {
        const res = await this.repo.delete(id);
        if (!res.affected || res.affected === 0) {
            throw new common_1.NotFoundException(`No record found to delete with ID ${id}`);
        }
        return res.affected > 0;
    }
};
exports.PositionService = PositionService;
exports.PositionService = PositionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(position_entity_1.Position)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PositionService);
//# sourceMappingURL=position.service.js.map