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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPoints = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let CustomerPoints = class CustomerPoints extends typeorm_1.BaseEntity {
    validater() {
        return __awaiter(this, void 0, void 0, function* () {
            yield class_validator_1.validateOrReject(this);
        });
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], CustomerPoints.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CustomerPoints.prototype, "id_client", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CustomerPoints.prototype, "points", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerPoints.prototype, "validater", null);
CustomerPoints = __decorate([
    typeorm_1.Entity()
], CustomerPoints);
exports.CustomerPoints = CustomerPoints;
