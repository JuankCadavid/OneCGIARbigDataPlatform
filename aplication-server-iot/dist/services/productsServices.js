"use strict";
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
exports.ProductsServices = void 0;
const db_1 = require("../database/db");
class ProductsServices {
    requestProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            let database = new db_1.Database();
            let dbConn = yield database.getConnection();
            console.log("database is connected", dbConn.isConnected);
            let dbStatus = "database is connected" + " " + dbConn.isConnected;
            try {
                const queryRunner = dbConn.createQueryRunner();
                yield queryRunner.connect();
                const products = yield queryRunner.query(`SELECT * FROM PRODUCTS WHERE STATE IS TRUE`);
                yield queryRunner.release();
                return { dbStatus, products };
            }
            catch (error) {
                return { message: "Products not found " + error };
            }
        });
    }
}
exports.ProductsServices = ProductsServices;
