import { InvalidContentError, ResourceNotFoundError } from "restify-errors";
import { Server, Request, Response, Next } from "restify";
import { Activity } from "../models/Activity";
import { ContactActivity } from "../models/ContactActivity";

export function activitiesRoutes(server: Server) {
  // Find all
  server.get("/activities", async (_req: Request, _res: Response, _next) => {
    try {
      const activities = await Activity.findAll({
        include: [{ model: Activity }]
      });
      _res.send(activities);
      _next();
    } catch (err) {
      return _next(new InvalidContentError(err));
    }
  });

  server.get(
    "/contacts-activities",
    async (_req: Request, _res: Response, _next: Next) => {
      try {
        const contactsActivities = await ContactActivity.findAll();
        _res.send(contactsActivities);
        _next();
      } catch (err) {
        new InvalidContentError(err);
      }
    }
  );

  // Find One
  server.get(
    "/activities/:id",
    async (_req: Request, _res: Response, _next) => {
      try {
        const activity = await Activity.findByPk(_req.params.id, {
          include: [{ model: Activity }]
        });
        _res.send(activity);
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

  server.post(
    "/activities/:id/contacts",
    async (_req: Request, _res: Response, _next: Next) => {
      try {
        const { contactsIds } = _req.body;
        const activity = await Activity.findByPk(_req.params.id);
        await activity.$add("contacts", contactsIds);
        _res.send(201);
        _next();
      } catch (err) {
        new ResourceNotFoundError(
          "There is no group with id of " + _req.params.id
        );
      }
    }
  );

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
