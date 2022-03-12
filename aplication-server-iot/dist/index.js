"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const app = express_1.default();
typeorm_1.createConnection();
app.set('port', 3000);
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
module.exports = app;
