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
      SELECT a.id,c.name as crop_name,a.activity_id,a.detail,a.activity_date 
        FROM activities a
        JOIN crops c
          on a.crops_id = c.id
        WHERE a.status = true`);

      await queryRunner.release();

      return activities;
    } catch (error) {
      return { message: "Activities Registered" + error };
    }
  }

 
}

const diligencesservices = new DiligencesServices();
export default diligencesservices;
