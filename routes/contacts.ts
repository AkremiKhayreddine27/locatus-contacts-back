import {
  InvalidContentError,
  InternalError,
  ResourceNotFoundError
} from "restify-errors";
import { Server, Next, Request, Response } from "restify";
import { Contact } from "../models";
export function contactsRoutes(server: Server) {
  // Find all
  server.get("/contacts", async (_req: Request, _res: Response, _next) => {
    try {
      const contacts = await Contact.find({});
      _res.send(contacts);
      _next();
    } catch (err) {
      return _next(new InvalidContentError(err));
    }
  });

  // Find One
  server.get("/contacts/:id", async (_req: Request, _res: Response, _next) => {
    try {
      const contact = await Contact.findById(_req.params.id);
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

  //Add
  server.post(
    "/contacts",
    async (_req: Request, _res: Response, _next: Next) => {
      if (!_req.is("application/json")) {
        return _next(new InvalidContentError("Expects 'application/json'"));
      }
      const { name } = _req.body;
      const contact = new Contact({
        name
      });

      try {
        const newContact = await contact.save();
        _res.send(201);
        _next();
      } catch (err) {
        return _next(new InternalError(err.message));
      }
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
        const contact = await Contact.findOneAndUpdate(
          { _id: _req.params.id },
          _req.body
        );
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
  //Update
  server.del(
    "/contacts/:id",
    async (_req: Request, _res: Response, _next: Next) => {
      try {
        const contact = await Contact.findOneAndRemove({ _id: _req.params.id });
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
}
