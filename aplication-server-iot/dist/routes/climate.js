"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_config_1 = __importDefault(require("../tools/multer.config"));
const diligencesControllers_1 = require("../controllers/diligencesControllers");
const router = (0, express_1.Router)();
const diligences = new diligencesControllers_1.DiligencesController();
router.get("/information", multer_config_1.default.single("file"), diligences.getWeatherInformation);
exports.default = router;
