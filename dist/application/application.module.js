"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const application_service_1 = require("./application.service");
const application_resolver_1 = require("./application.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const application_entity_1 = require("./application.entity");
const candidate_entity_1 = require("../candidate/candidate.entity");
const position_entity_1 = require("../position/position.entity");
let ApplicationModule = class ApplicationModule {
};
exports.ApplicationModule = ApplicationModule;
exports.ApplicationModule = ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([application_entity_1.Application, candidate_entity_1.Candidate, position_entity_1.Position])],
        providers: [application_resolver_1.ApplicationResolver, application_service_1.ApplicationService],
    })
], ApplicationModule);
//# sourceMappingURL=application.module.js.map