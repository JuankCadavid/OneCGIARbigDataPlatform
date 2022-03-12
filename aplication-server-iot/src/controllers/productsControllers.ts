import { Request, Response } from "express";
import { ProductsServices } from "../services/productsServices";

export class ProductsController {

  async getProducts(req: Request, res: Response): Promise<Response> {

    const productsServices = new ProductsServices();

    try {
 
      const products = await productsServices.requestProducts();

      return res.json({ products });
    } catch (error) {
      return res.status(404).json({ message: "Products not found " + error });
    }
  }
}
