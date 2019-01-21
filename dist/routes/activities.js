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
const Activity_1 = require("../models/Activity");
const ContactActivity_1 = require("../models/ContactActivity");
function activitiesRoutes(server) {
    // Find all
    server.get("/activities", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const activities = yield Activity_1.Activity.findAll({
                include: [{ model: Activity_1.Activity }]
            });
            _res.send(activities);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.InvalidContentError(err));
        }
    }));
    server.get("/contacts-activities", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const contactsActivities = yield ContactActivity_1.ContactActivity.findAll();
            _res.send(contactsActivities);
            _next();
        }
        catch (err) {
            new restify_errors_1.InvalidContentError(err);
        }
    }));
    // Find One
    server.get("/activities/:id", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const activity = yield Activity_1.Activity.findByPk(_req.params.id, {
                include: [{ model: Activity_1.Activity }]
            });
            _res.send(activity);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.ResourceNotFoundError("There is no activity with id of " + _req.params.id));
        }
    }));
    server.post("/activities/:id/contacts", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { contactsIds } = _req.body;
            const activity = yield Activity_1.Activity.findByPk(_req.params.id);
            yield activity.$add("contacts", contactsIds);
            _res.send(201);
            _next();
        }
        catch (err) {
            new restify_errors_1.ResourceNotFoundError("There is no group with id of " + _req.params.id);
        }
    }));
    /*
    server.post(
      "/activities",
      async (_req: Request, _res: Response, _next: Next) => {
        if (!_req.is("application/json")) {
          return _next(new InvalidContentError("Expects 'application/json'"));
        }
        const { display, level, parentId } = _req.body;
        Activity.create({
          display,
          level,
          parentId
        })
          .then(() => {
            _res.send(201);
            _next();
          })
          .catch(err => {
            return _next(new InternalError(err.message));
          });
      }
    );
  
    //Update
    server.put(
      "/activities/:id",
      async (_req: Request, _res: Response, _next: Next) => {
        if (!_req.is("application/json")) {
          return _next(new InvalidContentError("Expects 'application/json'"));
        }
  
        try {
          const activity = await Activity.findOneAndUpdate(
            { _id: _req.params.id },
            _req.body
          );
          _res.send(200);
          _next();
        } catch (err) {
          return _next(
            new ResourceNotFoundError(
              "There is no activity with id of " + _req.params.id
            )
          );
        }
      }
    );
  
    // Delete
    server.del(
      "/activities/:id",
      async (_req: Request, _res: Response, _next: Next) => {
        try {
          const activity = await Activity.findOneAndRemove({
            _id: _req.params.id
          });
          _res.send(204);
          _next();
        } catch (err) {
          return _next(
            new ResourceNotFoundError(
              "There is no activity with id of " + _req.params.id
            )
          );
        }
      }
    );
    */
}
exports.activitiesRoutes = activitiesRoutes;
//# sourceMappingURL=activities.js.map