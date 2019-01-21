import restify = require("restify");
import { config } from "./config";
import { contactsRoutes, groupsRoutes, activitiesRoutes } from "./routes";
import { db } from "./db";
import { initRoutes } from "./routes/init";
import { authRoutes } from "./routes/auth";
const rjwt = require("restify-jwt-community");

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.use(
  rjwt({ secret: config.JWT_SECRET }).unless({ path: ["/auth", "/register"] })
);



server.listen(config.PORT, () => {});

db.authenticate()
  .then(() => {
    initRoutes(server);
    authRoutes(server);
    contactsRoutes(server);
    groupsRoutes(server);
    activitiesRoutes(server);
    console.log("server started on port " + config.PORT);
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });
