import { Request, Response } from "express";
import {
  Connection,
} from "typeorm";
import { Database } from "../database/db";

export class ProductsServices {

  async requestProducts() {

    let database = new Database();
    let dbConn: Connection = await database.getConnection();

    console.log("database is connected", dbConn.isConnected);

    let dbStatus = "database is connected" + " " + dbConn.isConnected;

    try {
      const queryRunner = dbConn.createQueryRunner();

      await queryRunner.connect();

      const products = await queryRunner.query(`SELECT * FROM PRODUCTS WHERE STATE IS TRUE`);

      await queryRunner.release();

      return { dbStatus, products };
    } catch (error) {
      return { message: "Products not found " + error };
    }
  }
}
