"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
const contacts_1 = require("../seeders/contacts");
const groups_1 = require("../seeders/groups");
const activities_1 = require("../seeders/activities");
const contacts_2 = require("../migrations/contacts");
const users_1 = require("../seeders/users");
function initRoutes(server) {
    server.post("/migrate", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield contacts_2.migrate();
            _res.send(201);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.InternalError(err.message));
        }
    }));
    server.post("/seed/contacts", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield contacts_1.seedContacts();
            _res.send(201);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.InternalError(err.message));
        }
    }));
    server.post("/seed/groups", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield groups_1.seedGroups();
            _res.send(201);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.InternalError(err.message));
        }
    }));
    server.post("/seed/activities", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield activities_1.seedActivities();
            _res.send(201);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.InternalError(err.message));
        }
    }));
    server.post("/seed/users", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield users_1.seedUsers();
            _res.send(201);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.InternalError(err.message));
        }
    }));
}
exports.initRoutes = initRoutes;
//# sourceMappingURL=init.js.map