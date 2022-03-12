import {Router} from "express";
import { DiligencesController } from "../controllers/diligencesControllers";

const router = Router();
const diligences = new DiligencesController();

router.get('/',diligences.getProducts);


export default router;