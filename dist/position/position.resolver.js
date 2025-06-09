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
exports.PositionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const position_service_1 = require("./position.service");
const position_entity_1 = require("./position.entity");
const create_position_input_1 = require("./dto/create-position.input");
const update_position_input_1 = require("./dto/update-position.input");
let PositionResolver = class PositionResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    createPosition(input) {
        return this.service.create(input);
    }
    positions() {
        return this.service.findAll();
    }
    position(id) {
        return this.service.findOne(id);
    }
    updatePosition(input) {
        return this.service.update(input);
    }
    removePosition(id) {
        return this.service.remove(id);
    }
};
exports.PositionResolver = PositionResolver;
__decorate([
    (0, graphql_1.Mutation)(() => position_entity_1.Position),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_position_input_1.CreatePositionInput]),
    __metadata("design:returntype", void 0)
], PositionResolver.prototype, "createPosition", null);
__decorate([
    (0, graphql_1.Query)(() => [position_entity_1.Position]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PositionResolver.prototype, "positions", null);
__decorate([
    (0, graphql_1.Query)(() => position_entity_1.Position),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PositionResolver.prototype, "position", null);
__decorate([
    (0, graphql_1.Mutation)(() => position_entity_1.Position),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_position_input_1.UpdatePositionInput]),
    __metadata("design:returntype", void 0)
], PositionResolver.prototype, "updatePosition", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PositionResolver.prototype, "removePosition", null);
exports.PositionResolver = PositionResolver = __decorate([
    (0, graphql_1.Resolver)(() => position_entity_1.Position),
    __metadata("design:paramtypes", [position_service_1.PositionService])
], PositionResolver);
//# sourceMappingURL=position.resolver.js.map