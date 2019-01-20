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
const Contact_1 = require("../models/Contact");
const Group_1 = require("../models/Group");
const Activity_1 = require("../models/Activity");
const sequelize_typescript_1 = require("sequelize-typescript");
function contactsRoutes(server) {
    // Find all
    server.get("/contacts", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            let query = {};
            Object.keys(_req.query).map(key => {
                if (Array.isArray(_req.query[key])) {
                    query["$" + key + ".id$"] = { [sequelize_typescript_1.Sequelize.Op.in]: _req.query[key] };
                }
                else {
                    query[key] = { [sequelize_typescript_1.Sequelize.Op.eq]: _req.query[key] };
                }
            });
            const contacts = yield Contact_1.Contact.findAll({
                where: query,
                include: [
                    {
                        model: Group_1.Group
                    },
                    { model: Activity_1.Activity }
                ]
            });
            _res.send(contacts);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.InvalidContentError(err));
        }
    }));
    // Find One
    server.get("/contacts/:id", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const contact = yield Contact_1.Contact.findByPk(_req.params.id);
            _res.send(contact);
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.ResourceNotFoundError("There is no contact with id of " + _req.params.id));
        }
    }));
    /*
    server.post(
      "/contacts",
      async (_req: Request, _res: Response, _next: Next) => {
        if (!_req.is("application/json")) {
          return _next(new InvalidContentError("Expects 'application/json'"));
        }
        const {
          name,
          emails,
          companyId,
          job,
          followed,
          addresses,
          externalId,
          phoneNumbers,
          photo,
          rate,
          title,
          userName,
          userType,
          visibility,
          webSite,
          lastModified,
          createdAt
        } = _req.body;
        Contact.create({
          name,
          emails,
          companyId,
          job,
          followed,
          addresses,
          externalId,
          phoneNumbers,
          photo,
          rate,
          title,
          userName,
          userType,
          visibility,
          webSite,
          lastModified,
          createdAt
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
      "/contacts/:id",
      async (_req: Request, _res: Response, _next: Next) => {
        if (!_req.is("application/json")) {
          return _next(new InvalidContentError("Expects 'application/json'"));
        }
  
        try {
          //const contact = await Contact.update();
          _res.send(200);
          _next();
        } catch (err) {
          return _next(
            new ResourceNotFoundError(
              "There is no contact with id of " + _req.params.id
            )
          );
        }
      }
    );
  
    // Delete
    server.del(
      "/contacts/:id",
      async (_req: Request, _res: Response, _next: Next) => {
        try {
          //const contact = await Contact.({ _id: _req.params.id });
          _res.send(204);
          _next();
        } catch (err) {
          return _next(
            new ResourceNotFoundError(
              "There is no contact with id of " + _req.params.id
            )
          );
        }
      }
    );
    */
}
exports.contactsRoutes = contactsRoutes;
//# sourceMappingURL=contacts.js.map