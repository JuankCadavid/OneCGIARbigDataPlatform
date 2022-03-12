import {Router} from "express";
import {ProductsController} from "../controllers/productsControllers";

const router = Router();
const products = new ProductsController();

router.get('/',products.getProducts);


export default router;