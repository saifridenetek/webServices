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
exports.DecisionHistory = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const application_entity_1 = require("../application/application.entity");
let DecisionHistory = class DecisionHistory {
    id;
    status;
    date;
    comment;
    application;
};
exports.DecisionHistory = DecisionHistory;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DecisionHistory.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DecisionHistory.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], DecisionHistory.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DecisionHistory.prototype, "comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => application_entity_1.Application),
    (0, typeorm_1.ManyToOne)(() => application_entity_1.Application, (app) => app.decisionHistory, { onDelete: 'CASCADE' }),
    __metadata("design:type", application_entity_1.Application)
], DecisionHistory.prototype, "application", void 0);
exports.DecisionHistory = DecisionHistory = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], DecisionHistory);
//# sourceMappingURL=decision-history.entity.js.map