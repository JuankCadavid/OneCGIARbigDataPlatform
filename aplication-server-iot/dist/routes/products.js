"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsControllers_1 = require("../controllers/productsControllers");
const router = (0, express_1.Router)();
const products = new productsControllers_1.ProductsController();
router.get('/', products.getProducts);
exports.default = router;
