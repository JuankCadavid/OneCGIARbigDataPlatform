"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diligencesControllers_1 = require("../controllers/diligencesControllers");
const router = (0, express_1.Router)();
const diligences = new diligencesControllers_1.DiligencesController();
router.get('/', diligences.getProducts);
exports.default = router;
