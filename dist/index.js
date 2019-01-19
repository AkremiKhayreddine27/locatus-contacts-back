"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const config_1 = require("./config");
const routes_1 = require("./routes");
const db_1 = require("./db");
const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.listen(config_1.config.PORT, () => { });
db_1.db.authenticate()
    .then(() => {
    routes_1.contactsRoutes(server);
    routes_1.groupsRoutes(server);
    routes_1.activitiesRoutes(server);
    console.log("server started on port " + config_1.config.PORT);
})
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
});
//# sourceMappingURL=index.js.map