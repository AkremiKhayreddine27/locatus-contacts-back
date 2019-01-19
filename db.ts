import { Sequelize } from "sequelize-typescript";
import { config } from "./config";

export const db = new Sequelize({
  host: config.PG_HOST,
  database: config.PG_DATABASE,
  dialect: "postgres",
  username: config.PG_USER,
  password: config.PG_PASSWORD,
  modelPaths: [__dirname + "/models"],
  dialectOptions: {
    ssl: {
      require: true
    }
  },
}); 
