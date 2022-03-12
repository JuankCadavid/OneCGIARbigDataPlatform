import {Router} from "express";
import activities from "./activities";

const Routes = Router();

Routes.use('/activities',activities);

export default Routes;