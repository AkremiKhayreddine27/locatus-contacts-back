import restify = require("restify");
import { config } from "./config";
import { contactsRoutes, groupsRoutes, activitiesRoutes } from "./routes";
import { db } from "./db";
const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {});

db.authenticate()
  .then(() => {
    contactsRoutes(server);
    groupsRoutes(server);
    activitiesRoutes(server);
    console.log("server started on port " + config.PORT);
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });
