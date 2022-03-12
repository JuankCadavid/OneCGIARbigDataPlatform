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
const db_1 = require("../database/db");
class DiligencesServices {
    /**
     * REQUEST DILIGENCES REGISTERED
     * @param city_id
     * @param vehicle_type_id
     * @param base
     * @returns diligences
     */
    requestActivitiesRegistered() {
        return __awaiter(this, void 0, void 0, function* () {
            let database = new db_1.Database();
            let dbConn = yield database.getConnection();
            const range = process.env.RANGE;
            try {
                const queryRunner = dbConn.createQueryRunner();
                yield queryRunner.connect();
                const activities = yield queryRunner.query(`
      SELECT * FROM activities`);
                yield queryRunner.release();
                return { activities };
            }
            catch (error) {
                return { message: "Activities Registered" + error };
            }
        });
    }
}
const diligencesservices = new DiligencesServices();
exports.default = diligencesservices;
