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
exports.DecisionHistoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const decision_history_service_1 = require("./decision-history.service");
const create_decision_history_input_1 = require("./dto/create-decision-history.input");
const decision_history_entity_1 = require("./decision-history.entity");
let DecisionHistoryResolver = class DecisionHistoryResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    createDecision(input) {
        return this.service.create(input);
    }
    decisionHistory() {
        return this.service.findAll();
    }
    decisionHistoryByApplication(id) {
        return this.service.findByApplication(id);
    }
};
exports.DecisionHistoryResolver = DecisionHistoryResolver;
__decorate([
    (0, graphql_1.Mutation)(() => decision_history_entity_1.DecisionHistory),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_decision_history_input_1.CreateDecisionHistoryInput]),
    __metadata("design:returntype", void 0)
], DecisionHistoryResolver.prototype, "createDecision", null);
__decorate([
    (0, graphql_1.Query)(() => [decision_history_entity_1.DecisionHistory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DecisionHistoryResolver.prototype, "decisionHistory", null);
__decorate([
    (0, graphql_1.Query)(() => [decision_history_entity_1.DecisionHistory]),
    __param(0, (0, graphql_1.Args)('applicationId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DecisionHistoryResolver.prototype, "decisionHistoryByApplication", null);
exports.DecisionHistoryResolver = DecisionHistoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => decision_history_entity_1.DecisionHistory),
    __metadata("design:paramtypes", [decision_history_service_1.DecisionHistoryService])
], DecisionHistoryResolver);
//# sourceMappingURL=decision-history.resolver.js.map