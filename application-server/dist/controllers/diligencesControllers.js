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
exports.DiligencesController = void 0;
const diligencesServices_1 = require("../services/diligencesServices");
class DiligencesController {
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const diligencesServices = new diligencesServices_1.DiligencesServices();
            try {
                const diligences = yield diligencesServices.requestDiligences();
                return res.json({ diligences });
            }
            catch (error) {
                return res.status(404).json({ message: "Products not found " + error });
            }
        });
    }
}
exports.DiligencesController = DiligencesController;
