import {
  InvalidContentError,
  ResourceNotFoundError
} from "restify-errors";
import { Server, Request, Response } from "restify";
import { Group } from "../models/Group";
export function groupsRoutes(server: Server) {
  // Find all
  server.get("/groups", async (_req: Request, _res: Response, _next) => {
    try {
      const groups = await Group.findAll();
      _res.send(groups);
      _next();
    } catch (err) {
      return _next(new InvalidContentError(err));
    }
  });

  // Find One
  server.get("/groups/:id", async (_req: Request, _res: Response, _next) => {
    try {
      const group = await Group.findByPk(_req.params.id);
      _res.send(group);
      _next();
    } catch (err) {
      return _next(
        new ResourceNotFoundError(
          "There is no group with id of " + _req.params.id
        )
      );
    }
  });

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
