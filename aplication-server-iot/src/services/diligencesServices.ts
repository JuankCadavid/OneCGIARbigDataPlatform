import { Request, Response } from "express";
import {
  Connection,
} from "typeorm";
import { Database } from "../database/db";

export class DiligencesServices {

  async requestDiligences() {

    let database = new Database();
    let dbConn: Connection = await database.getConnection();

    console.log("database is connected", dbConn.isConnected);

    let dbStatus = "database is connected" + " " + dbConn.isConnected;

    try {
      const queryRunner = dbConn.createQueryRunner();

      await queryRunner.connect();

      const diligences = await queryRunner.query(`SELECT * FROM diligence WHERE state = 'ON_ROUTE'`);

      await queryRunner.release();

      return { dbStatus, diligences };
    } catch (error) {
      return { message: "Diligences not found " + error };
    }
  }
}
