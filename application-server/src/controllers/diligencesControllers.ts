import { Request, Response } from "express";
import { DiligencesServices } from "../services/diligencesServices";

export class DiligencesController {

  async getProducts(req: Request, res: Response): Promise<Response> {

    const diligencesServices = new DiligencesServices();

    try {
 
      const diligences = await diligencesServices.requestDiligences();

      return res.json({ diligences });
    } catch (error) {
      return res.status(404).json({ message: "Products not found " + error });
    }
  }
}
