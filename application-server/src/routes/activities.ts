import { Router } from "express";
import upload from "../tools/multer.config";
import { DiligencesController } from "../controllers/diligencesControllers";

const router = Router();
const diligences = new DiligencesController();

router.get(
  "/registered",
  upload.single("file"),
  diligences.getActivitiesActives
);


export default router;
