import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config();
export const database = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "123456",
  database: "iRep",
  synchronize: true,
  logging: false,
  entities: ['./src/entity/*.entity.ts'],
  migrations: ["./src/migrations/*.ts"],
});
