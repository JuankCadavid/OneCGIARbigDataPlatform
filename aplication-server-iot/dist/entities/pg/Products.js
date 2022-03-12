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
exports.Products = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Products = class Products extends typeorm_1.BaseEntity {
    validater() {
        return __awaiter(this, void 0, void 0, function* () {
            yield class_validator_1.validateOrReject(this);
        });
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Products.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(5, 10),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Products.prototype, "reference", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(0, 50),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Min(0),
    class_validator_1.Max(20),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], Products.prototype, "idcategory", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    class_validator_1.Min(1),
    class_validator_1.Max(100000),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_validator_1.Max(1000000),
    __metadata("design:type", Number)
], Products.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(0, 30),
    __metadata("design:type", String)
], Products.prototype, "barcode", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(0, 10),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Products.prototype, "units", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Products.prototype, "promo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Products.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Products.prototype, "cost", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Products.prototype, "maturation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Products.prototype, "units_per_pound", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Products.prototype, "tip", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Products.prototype, "price_by_quantity", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Products.prototype, "sub_category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Products.prototype, "sub_category_two", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Products.prototype, "discount", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Products.prototype, "validater", null);
Products = __decorate([
    typeorm_1.Entity()
], Products);
exports.Products = Products;
