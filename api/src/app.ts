import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { database } from '../app-data-source';
import { router } from "./routes/index.routes";

dotenv.config();

const app = express();

app.use(express.json());

export const defaultConnection = database.initialize()

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`App running in ${process.env.PORT}`);
});

app.use('/', router);
