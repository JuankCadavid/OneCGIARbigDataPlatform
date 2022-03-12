import { Request, Response } from "express";
import diligencesservices from "../services/diligencesServices";

export class DiligencesController {
  async getWeatherInformation(req: Request, res: Response): Promise<Response> {


    try {
      const weather = await diligencesservices.requestWeatherInformation();

      return res.json(weather);
    } catch (error) {
      return res
        .status(404)
        .json({ message: "getWeatherInformation not found " + error });
    }
  }


}
