import { Connection } from "typeorm";
import { Database } from "../database/db";


class DiligencesServices {
  /**
   * REQUEST DILIGENCES REGISTERED
   * @param city_id
   * @param vehicle_type_id
   * @param base
   * @returns diligences
   */
  public async requestActivitiesRegistered(
  ) {
    let database = new Database();
    let dbConn: Connection = await database.getConnection();
    const range: any = process.env.RANGE;


    try {
      const queryRunner = dbConn.createQueryRunner();

      await queryRunner.connect();

      const activities = await queryRunner.query(`
      SELECT * FROM activities`);

      await queryRunner.release();

      return { activities };
    } catch (error) {
      return { message: "Activities Registered" + error };
    }
  }

 
}

const diligencesservices = new DiligencesServices();
export default diligencesservices;
