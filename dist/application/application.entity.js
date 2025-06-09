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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const graphql_1 = require("@nestjs/graphql");
const candidate_entity_1 = require("../candidate/candidate.entity");
const decision_history_entity_1 = require("../decision-history/decision-history.entity");
const position_entity_1 = require("../position/position.entity");
const typeorm_1 = require("typeorm");
let Application = class Application {
    id;
    status;
    createdAt;
    candidate;
    position;
    decisionHistory;
};
exports.Application = Application;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Application.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Application.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Application.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => candidate_entity_1.Candidate),
    (0, typeorm_1.ManyToOne)(() => candidate_entity_1.Candidate, (candidate) => candidate.applications, { eager: true }),
    __metadata("design:type", candidate_entity_1.Candidate)
], Application.prototype, "candidate", void 0);
__decorate([
    (0, graphql_1.Field)(() => position_entity_1.Position),
    (0, typeorm_1.ManyToOne)(() => position_entity_1.Position, (position) => position.applications, { eager: true }),
    __metadata("design:type", position_entity_1.Position)
], Application.prototype, "position", void 0);
__decorate([
    (0, graphql_1.Field)(() => [decision_history_entity_1.DecisionHistory], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => decision_history_entity_1.DecisionHistory, (history) => history.application, { cascade: true }),
    __metadata("design:type", Array)
], Application.prototype, "decisionHistory", void 0);
exports.Application = Application = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Application);
//# sourceMappingURL=application.entity.js.map