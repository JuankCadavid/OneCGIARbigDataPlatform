import {Router} from "express";
import diligences from "./diligences";
import products from "./products";

const Routes = Router();

Routes.use('/products',products);
Routes.use('/diligences',diligences);

export default Routes;