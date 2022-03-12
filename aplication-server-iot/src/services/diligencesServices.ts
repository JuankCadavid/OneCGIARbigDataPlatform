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
  public async requestWeatherInformation(
  ) {
    let database = new Database();
    let dbConn: Connection = await database.getConnection();
    const range: any = process.env.RANGE;


    try {
      const queryRunner = dbConn.createQueryRunner();

      await queryRunner.connect();

      const weather = await queryRunner.query(`
      SELECT * FROM climatic_information
       ORDER BY id ASC `);

      await queryRunner.release();

      return weather;
    } catch (error) {
      return { message: "weather information" + error };
    }
  }

 
}

const diligencesservices = new DiligencesServices();
export default diligencesservices;
