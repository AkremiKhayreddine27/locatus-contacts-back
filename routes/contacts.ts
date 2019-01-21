import { InvalidContentError, ResourceNotFoundError } from "restify-errors";
import { Server, Request, Response } from "restify";
import { Contact } from "../models/Contact";
import { Group } from "../models/Group";
import { Activity } from "../models/Activity";
import { Sequelize } from "sequelize-typescript";


export function contactsRoutes(server: Server) {
  // Find all
  server.get("/contacts", async (_req: Request, _res: Response, _next) => {
    try {
      let query = {};
      Object.keys(_req.query).map(key => {
        if (Array.isArray(_req.query[key])) {
          query["$" + key + ".id$"] = { [Sequelize.Op.in]: _req.query[key] };
        } else {
          query[key] = { [Sequelize.Op.eq]: _req.query[key] };
        }
      });
      const contacts = await Contact.findAll({
        where: query,
        include: [
          {
            model: Group
          },
          { model: Activity }
        ]
      });
      _res.send(contacts);
      _next();
    } catch (err) {
      return _next(new InvalidContentError(err));
    }
  });

  // Find One
  server.get("/contacts/:id", async (_req: Request, _res: Response, _next) => {
    try {
      const contact = await Contact.findByPk(_req.params.id);
      _res.send(contact);
      _next();
    } catch (err) {
      return _next(
        new ResourceNotFoundError(
          "There is no contact with id of " + _req.params.id
        )
      );
    }
  });

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
