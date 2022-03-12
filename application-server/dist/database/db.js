"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.Database = void 0;
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
/**
 * Database manager class
 */
class Database {
    constructor() {
        this.connectionManager = (0, typeorm_1.getConnectionManager)();
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const CONNECTION_NAME = `default`;
            let connection;
            if (this.connectionManager.has(CONNECTION_NAME)) {
                console.log(`Database.getConnection()-using existing connection ...`);
                connection = yield this.connectionManager.get(CONNECTION_NAME);
                if (!connection.isConnected) {
                    connection = yield connection.connect();
                }
            }
            else {
                console.log(`Database.getConnection()-creating connection ...`);
                const connectionOptions = {
                    name: `default`,
                    type: `postgres`,
                    port: 5432,
                    synchronize: false,
                    host: 'onecgiarbigdata.ctwnnpfxxzig.us-east-1.rds.amazonaws.com',
                    username: 'postgres',
                    database: 'bigdata',
                    password: process.env.PASS2,
                    entities: [
                        "dist/entities/pg/**/*.js"
                    ]
                };
                // Don't need a pwd locally
                if (process.env.DB_PASSWORD) {
                    Object.assign(connectionOptions, {
                        password: process.env.DB_PASSWORD
                    });
                }
                connection = yield (0, typeorm_1.createConnection)(connectionOptions);
            }
            return connection;
        });
    }
}
exports.Database = Database;
