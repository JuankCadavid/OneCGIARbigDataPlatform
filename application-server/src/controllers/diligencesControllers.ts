import { Request, Response } from "express";
import diligencesservices from "../services/diligencesServices";

export class DiligencesController {
  async getActivitiesActives(req: Request, res: Response): Promise<Response> {


    try {
      const activities = await diligencesservices.requestActivitiesRegistered();

      return res.json(activities);
    } catch (error) {
      return res
        .status(404)
        .json({ message: "getActivitiesActives not found " + error });
    }
  }


}
