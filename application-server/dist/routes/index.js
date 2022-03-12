"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activities_1 = __importDefault(require("./activities"));
const Routes = (0, express_1.Router)();
Routes.use('/activities', activities_1.default);
exports.default = Routes;
