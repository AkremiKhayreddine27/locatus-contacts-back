import restify = require("restify");
import mongoose = require("mongoose");
import { config } from "./config";
import { contactsRoutes, groupsRoutes, activitiesRoutes } from "./routes";

const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
  mongoose.connect(
    config.MONGODB_URI,
    { useNewUrlParser: true }
  );
});

const db = mongoose.connection;

db.on("error", err => console.log(err));

db.once("open", () => {
  contactsRoutes(server);
  groupsRoutes(server);
  activitiesRoutes(server);
  console.log("server started on port " + config.PORT);
});
