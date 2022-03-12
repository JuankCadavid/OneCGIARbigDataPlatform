"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diligences_1 = __importDefault(require("./diligences"));
const products_1 = __importDefault(require("./products"));
const Routes = express_1.Router();
Routes.use('/products', products_1.default);
Routes.use('/diligences', diligences_1.default);
exports.default = Routes;
