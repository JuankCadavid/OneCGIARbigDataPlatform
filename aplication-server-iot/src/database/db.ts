import { Connection, ConnectionManager, ConnectionOptions, createConnection, getConnectionManager } from 'typeorm'
import * as dotenv from 'dotenv';

dotenv.config();
/**
 * Database manager class
 */
export class Database {

    private connectionManager: ConnectionManager

    constructor() {
        this.connectionManager = getConnectionManager()
    }

    public async getConnection(): Promise<Connection> {
        const CONNECTION_NAME = `default`

        let connection: Connection 

        if (this.connectionManager.has(CONNECTION_NAME)) {
            console.log(`Database.getConnection()-using existing connection ...`)
            connection = await this.connectionManager.get(CONNECTION_NAME)

            if (!connection.isConnected) {
                connection = await connection.connect()
            }
        }
        else {
            console.log(`Database.getConnection()-creating connection ...`)

            const connectionOptions: ConnectionOptions = {
                name: `default`,
                type: `postgres`,
                port: 5432,
                synchronize: false,
                host: 'onecgiarbigdata.ctwnnpfxxzig.us-east-1.rds.amazonaws.com',
                username: 'postgres',
                database: 'bigdata',
                password: process.env.PASS2,
                entities: [
                    "dist/entities/pg/**/*.js"
                ]
            }

            // Don't need a pwd locally
            if (process.env.DB_PASSWORD) {
                Object.assign(connectionOptions, {
                    password: process.env.DB_PASSWORD
                })
            }
            
            connection = await createConnection(connectionOptions)
        }

        return connection
    }
}