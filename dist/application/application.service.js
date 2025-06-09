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
exports.ApplicationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const application_entity_1 = require("./application.entity");
const candidate_entity_1 = require("../candidate/candidate.entity");
const position_entity_1 = require("../position/position.entity");
let ApplicationService = class ApplicationService {
    applicationRepo;
    candidateRepo;
    positionRepo;
    constructor(applicationRepo, candidateRepo, positionRepo) {
        this.applicationRepo = applicationRepo;
        this.candidateRepo = candidateRepo;
        this.positionRepo = positionRepo;
    }
    async create(input) {
        const candidate = await this.candidateRepo.findOneBy({ id: input.candidateId });
        const position = await this.positionRepo.findOneBy({ id: input.positionId });
        if (!candidate || !position) {
            throw new common_1.NotFoundException('Candidate or Position not found');
        }
        const application = this.applicationRepo.create({
            ...input,
            candidate,
            position,
            createdAt: new Date(),
        });
        return this.applicationRepo.save(application);
    }
    async findByStatus(status) {
        return this.applicationRepo.find({
            where: { status },
            relations: ['candidate', 'position'],
        });
    }
    findAll() {
        return this.applicationRepo.find();
    }
    async findOne(id) {
        const app = await this.applicationRepo.findOneBy({ id });
        if (!app) {
            throw new common_1.NotFoundException(`Application with id ${id} not found`);
        }
        return app;
    }
    async update(id, input) {
        const application = await this.applicationRepo.findOne({
            where: { id },
            relations: ['candidate', 'position'],
        });
        if (!application) {
            throw new common_1.NotFoundException(`Application with ID ${id} not found`);
        }
        if (input.status) {
            application.status = input.status;
        }
        return this.applicationRepo.save(application);
    }
    async remove(id) {
        const result = await this.applicationRepo.delete(id);
        if (!result.affected || result.affected === 0) {
            throw new common_1.NotFoundException(`No record found to delete with ID ${id}`);
        }
        return result.affected > 0;
    }
    async findByCandidate(candidateId) {
        return this.applicationRepo.find({
            where: { candidate: { id: candidateId } },
        });
    }
};
exports.ApplicationService = ApplicationService;
exports.ApplicationService = ApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(application_entity_1.Application)),
    __param(1, (0, typeorm_1.InjectRepository)(candidate_entity_1.Candidate)),
    __param(2, (0, typeorm_1.InjectRepository)(position_entity_1.Position)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ApplicationService);
//# sourceMappingURL=application.service.js.map