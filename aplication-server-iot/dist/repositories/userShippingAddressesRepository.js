"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShippingAddressesRepository = void 0;
const typeorm_1 = require("typeorm");
const ShippingAdressesSecondaries_1 = require("../entities/pg/ShippingAdressesSecondaries");
let UserShippingAddressesRepository = class UserShippingAddressesRepository extends typeorm_1.Repository {
    findByUser(user_id) {
        return this.find({ where: { user_id: user_id } });
    }
    findByTypeAddress(user_id, name) {
        return this.findOne({ user_id: user_id, name: name });
    }
};
UserShippingAddressesRepository = __decorate([
    (0, typeorm_1.EntityRepository)(ShippingAdressesSecondaries_1.customerAddress)
], UserShippingAddressesRepository);
exports.UserShippingAddressesRepository = UserShippingAddressesRepository;