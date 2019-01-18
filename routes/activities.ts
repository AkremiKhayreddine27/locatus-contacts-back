import {
  InvalidContentError,
  InternalError,
  ResourceNotFoundError
} from "restify-errors";
import { Server, Next, Request, Response } from "restify";
import { Activity } from "../models";
export function activitiesRoutes(server: Server) {
  // Find all
  server.get("/activities", async (_req: Request, _res: Response, _next) => {
    try {
      const activities = await Activity.find({});
      _res.send(activities);
      _next();
    } catch (err) {
      return _next(new InvalidContentError(err));
    }
  });

  // Find One
  server.get(
    "/activities/:id",
    async (_req: Request, _res: Response, _next) => {
      try {
        const activity = await Activity.findById(_req.params.id);
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

  //Add
  server.post(
    "/activities",
    async (_req: Request, _res: Response, _next: Next) => {
      if (!_req.is("application/json")) {
        return _next(new InvalidContentError("Expects 'application/json'"));
      }
      const { display } = _req.body;
      const activity = new Activity({
        name
      });

      try {
        const newActivity = await activity.save();
        _res.send(201);
        _next();
      } catch (err) {
        return _next(new InternalError(err.message));
      }
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
  //Update
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
}
