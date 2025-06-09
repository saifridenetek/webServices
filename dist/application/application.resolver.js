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
exports.ApplicationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const application_service_1 = require("./application.service");
const application_entity_1 = require("./application.entity");
const create_application_input_1 = require("./dto/create-application.input");
const update_application_input_1 = require("./dto/update-application.input");
let ApplicationResolver = class ApplicationResolver {
    applicationService;
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    createApplication(input) {
        return this.applicationService.create(input);
    }
    applicationsByStatus(status) {
        return this.applicationService.findByStatus(status);
    }
    findAll() {
        return this.applicationService.findAll();
    }
    findOne(id) {
        return this.applicationService.findOne(id);
    }
    updateApplication(input) {
        return this.applicationService.update(input.id, input);
    }
    removeApplication(id) {
        return this.applicationService.remove(id);
    }
    applicationsByCandidate(candidateId) {
        return this.applicationService.findByCandidate(candidateId);
    }
};
exports.ApplicationResolver = ApplicationResolver;
__decorate([
    (0, graphql_1.Mutation)(() => application_entity_1.Application),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_application_input_1.CreateApplicationInput]),
    __metadata("design:returntype", void 0)
], ApplicationResolver.prototype, "createApplication", null);
__decorate([
    (0, graphql_1.Query)(() => [application_entity_1.Application]),
    __param(0, (0, graphql_1.Args)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplicationResolver.prototype, "applicationsByStatus", null);
__decorate([
    (0, graphql_1.Query)(() => [application_entity_1.Application], { name: 'applications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApplicationResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => application_entity_1.Application, { name: 'application' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ApplicationResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => application_entity_1.Application),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_application_input_1.UpdateApplicationInput]),
    __metadata("design:returntype", void 0)
], ApplicationResolver.prototype, "updateApplication", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ApplicationResolver.prototype, "removeApplication", null);
__decorate([
    (0, graphql_1.Query)(() => [application_entity_1.Application]),
    __param(0, (0, graphql_1.Args)('candidateId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ApplicationResolver.prototype, "applicationsByCandidate", null);
exports.ApplicationResolver = ApplicationResolver = __decorate([
    (0, graphql_1.Resolver)(() => application_entity_1.Application),
    __metadata("design:paramtypes", [application_service_1.ApplicationService])
], ApplicationResolver);
//# sourceMappingURL=application.resolver.js.map