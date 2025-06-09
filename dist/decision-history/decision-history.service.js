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
exports.DecisionHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const decision_history_entity_1 = require("./decision-history.entity");
const application_entity_1 = require("../application/application.entity");
let DecisionHistoryService = class DecisionHistoryService {
    repo;
    appRepo;
    constructor(repo, appRepo) {
        this.repo = repo;
        this.appRepo = appRepo;
    }
    async create(input) {
        const application = await this.appRepo.findOneBy({ id: input.applicationId });
        if (!application)
            throw new common_1.NotFoundException('Application not found');
        const history = this.repo.create({
            ...input,
            application,
        });
        return this.repo.save(history);
    }
    findAll() {
        return this.repo.find({ relations: ['application'] });
    }
    findByApplication(applicationId) {
        return this.repo.find({ where: { application: { id: applicationId } } });
    }
};
exports.DecisionHistoryService = DecisionHistoryService;
exports.DecisionHistoryService = DecisionHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(decision_history_entity_1.DecisionHistory)),
    __param(1, (0, typeorm_1.InjectRepository)(application_entity_1.Application)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DecisionHistoryService);
//# sourceMappingURL=decision-history.service.js.map