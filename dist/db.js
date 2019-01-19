"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config");
exports.db = new sequelize_typescript_1.Sequelize({
    host: config_1.config.PG_HOST,
    database: config_1.config.PG_DATABASE,
    dialect: "postgres",
    username: config_1.config.PG_USER,
    password: config_1.config.PG_PASSWORD,
    modelPaths: [__dirname + "/models"],
    dialectOptions: {
        ssl: {
            require: true
        }
    },
});
//# sourceMappingURL=db.js.map