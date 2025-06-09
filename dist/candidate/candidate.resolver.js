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
exports.CandidateResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const candidate_service_1 = require("./candidate.service");
const candidate_entity_1 = require("./candidate.entity");
const create_candidate_input_1 = require("./dto/create-candidate.input");
let CandidateResolver = class CandidateResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    candidates() {
        return this.service.findAll();
    }
    createCandidate(input) {
        return this.service.create(input);
    }
};
exports.CandidateResolver = CandidateResolver;
__decorate([
    (0, graphql_1.Query)(() => [candidate_entity_1.Candidate]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateResolver.prototype, "candidates", null);
__decorate([
    (0, graphql_1.Mutation)(() => candidate_entity_1.Candidate),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidate_input_1.CreateCandidateInput]),
    __metadata("design:returntype", Promise)
], CandidateResolver.prototype, "createCandidate", null);
exports.CandidateResolver = CandidateResolver = __decorate([
    (0, graphql_1.Resolver)(() => candidate_entity_1.Candidate),
    __metadata("design:paramtypes", [candidate_service_1.CandidateService])
], CandidateResolver);
//# sourceMappingURL=candidate.resolver.js.map