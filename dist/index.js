"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify = require("restify");
var mongoose = require("mongoose");
var config_1 = require("./config");
var routes_1 = require("./routes");
var server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.listen(config_1.config.PORT, function () {
    mongoose.connect(config_1.config.MONGODB_URI, { useNewUrlParser: true });
});
var db = mongoose.connection;
db.on("error", function (err) { return console.log(err); });
db.once("open", function () {
    routes_1.contactsRoutes(server);
    routes_1.groupsRoutes(server);
    routes_1.activitiesRoutes(server);
    console.log("server started on port " + config_1.config.PORT);
});
