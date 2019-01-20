import { InternalError } from "restify-errors";
import { Server, Request, Response, Next } from "restify";
import { seedContacts } from "../seeders/contacts";
import { seedGroups } from "../seeders/groups";
import { seedActivities } from "../seeders/activities";
import { migrate } from "../migrations/contacts";

export function initRoutes(server: Server) {
  server.post("/migrate", async (_req: Request, _res: Response, _next: Next) => {
    try {
      await migrate();
      _res.send(201);
      _next();
    } catch (err) {
      return _next(new InternalError(err.message));
    }
  });

  server.post(
    "/seed/contacts",
    async (_req: Request, _res: Response, _next) => {
      try {
        await seedContacts();
        _res.send(201);
        _next();
      } catch (err) {
        return _next(new InternalError(err.message));
      }
    }
  );

  server.post("/seed/groups", async (_req: Request, _res: Response, _next) => {
    try {
      await seedGroups();
      _res.send(201);
      _next();
    } catch (err) {
      return _next(new InternalError(err.message));
    }
  });

  server.post(
    "/seed/activities",
    async (_req: Request, _res: Response, _next) => {
      try {
        await seedActivities();
        _res.send(201);
        _next();
      } catch (err) {
        return _next(new InternalError(err.message));
      }
    }
  );
}
