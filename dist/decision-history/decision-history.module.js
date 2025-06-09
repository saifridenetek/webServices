"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const decision_history_service_1 = require("./decision-history.service");
const decision_history_resolver_1 = require("./decision-history.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const decision_history_entity_1 = require("./decision-history.entity");
const application_entity_1 = require("../application/application.entity");
let DecisionHistoryModule = class DecisionHistoryModule {
};
exports.DecisionHistoryModule = DecisionHistoryModule;
exports.DecisionHistoryModule = DecisionHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([decision_history_entity_1.DecisionHistory, application_entity_1.Application])],
        providers: [decision_history_service_1.DecisionHistoryService, decision_history_resolver_1.DecisionHistoryResolver],
    })
], DecisionHistoryModule);
//# sourceMappingURL=decision-history.module.js.map