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
exports.DiligencesServices = void 0;
const db_1 = require("../database/db");
class DiligencesServices {
    requestDiligences() {
        return __awaiter(this, void 0, void 0, function* () {
            let database = new db_1.Database();
            let dbConn = yield database.getConnection();
            console.log("database is connected", dbConn.isConnected);
            let dbStatus = "database is connected" + " " + dbConn.isConnected;
            try {
                const queryRunner = dbConn.createQueryRunner();
                yield queryRunner.connect();
                const diligences = yield queryRunner.query(`SELECT * FROM diligence WHERE state = 'ON_ROUTE'`);
                yield queryRunner.release();
                return { dbStatus, diligences };
            }
            catch (error) {
                return { message: "Diligences not found " + error };
            }
        });
    }
}
exports.DiligencesServices = DiligencesServices;
