import { DataSource } from "typeorm";
import { databaseConfig } from "./database.config";

export const datasource: DataSource = new DataSource(databaseConfig);