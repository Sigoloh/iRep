import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';

dotenv.config();
export const database = process.env.ENV === 'dev' ?
    new DataSource({
        type: "postgres",
        host: 'postgres-db.captain.localhost',
        username: 'admin',
        password: 'admin',
        database: 'database',
        entities: ["./src/entity/*.ts"],
        migrations: ["./src/migrations/*.ts"],
        logging: false,
}) : new DataSource({
        type: "mssql",
        host: process.env.DATABASE_HOST.toString(),
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER.toString(),
        password: process.env.DATABASE_PASS.toString(),
        database: process.env.DATABASE.toString(),
        options: {encrypt: false},
        entities: ["./src/entity/*.ts"],
        migrations: ["./src/migrations/*.ts"],
});
