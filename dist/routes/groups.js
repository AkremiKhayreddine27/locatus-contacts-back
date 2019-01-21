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
const Group_1 = require("../models/Group");
function groupsRoutes(server) {
    // Find all
    server.get("/groups", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const groups = yield Group_1.Group.findAll();
            _res.send(groups);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.InvalidContentError(err));
        }
    }));
    // Find One
    server.get("/groups/:id", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const group = yield Group_1.Group.findByPk(_req.params.id);
            _res.send(group);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.ResourceNotFoundError("There is no group with id of " + _req.params.id));
        }
    }));
    // Add contacts to group
    server.post("/groups/:id/contacts", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { contactsIds } = _req.body;
            const group = yield Group_1.Group.findByPk(_req.params.id);
            yield group.$add("contacts", contactsIds);
            _res.send(201);
            _next();
        }
        catch (err) {
            new restify_errors_1.ResourceNotFoundError("There is no group with id of " + _req.params.id);
        }
    }));
    /*
    server.post("/groups", async (_req: Request, _res: Response, _next: Next) => {
      if (!_req.is("application/json")) {
        return _next(new InvalidContentError("Expects 'application/json'"));
      }
      const { display, level, parentId } = _req.body;
      const group = Group.create({
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
    });
  
    //Update
    server.put(
      "/groups/:id",
      async (_req: Request, _res: Response, _next: Next) => {
        if (!_req.is("application/json")) {
          return _next(new InvalidContentError("Expects 'application/json'"));
        }
  
        try {
          const group = await Group.findOneAndUpdate(
            { _id: _req.params.id },
            _req.body
          );
          _res.send(200);
          _next();
        } catch (err) {
          return _next(
            new ResourceNotFoundError(
              "There is no group with id of " + _req.params.id
            )
          );
        }
      }
    );
  
    // Delete
    server.del(
      "/groups/:id",
      async (_req: Request, _res: Response, _next: Next) => {
        try {
          const group = await Group.findOneAndRemove({ _id: _req.params.id });
          _res.send(204);
          _next();
        } catch (err) {
          return _next(
            new ResourceNotFoundError(
              "There is no group with id of " + _req.params.id
            )
          );
        }
      }
    );
    */
}
exports.groupsRoutes = groupsRoutes;
//# sourceMappingURL=groups.js.map