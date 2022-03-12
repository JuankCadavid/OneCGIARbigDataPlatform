import {Router} from "express";
import climate from "./climate";

const Routes = Router();

Routes.use('/weather',climate);

export default Routes;