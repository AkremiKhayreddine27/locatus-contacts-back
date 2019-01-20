import { Server, Request, Response, Next } from "restify";
import { InternalError, UnauthorizedError } from "restify-errors";
import { genSalt, hash, compare } from "bcryptjs";
import { sign, decode } from "jsonwebtoken";
import { User } from "../models/User";
import { config } from "../config";

export function authRoutes(server: Server) {
  server.post(
    "/register",
    async (_req: Request, _res: Response, _next: Next) => {
      try {
        const {
          name,
          emails,
          phoneNumbers,
          photo,
          userName,
          password
        } = _req.body;
        await genSalt(10).then(salt => {
          hash(password, salt).then(crypted => {
            User.create({
              name,
              emails,
              phoneNumbers,
              photo,
              userName,
              password: crypted,
              createdAt: new Date(),
              lastModified: new Date()
            });
          });
        });
        _res.send(201);
        _next();
      } catch (err) {
        return _next(new InternalError(err.message));
      }
    }
  );

  server.post("/auth", async (_req: Request, _res: Response, _next: Next) => {
    try {
      const { userName, password } = _req.body;
      const user: any = await auth(userName, password);
      const token = sign(user.toJSON(), config.JWT_SECRET, {
        expiresIn: "15m"
      });
      const { iat, exp }: any = decode(token);
      _res.send({ iat, exp, token });
      _next();
    } catch (err) {
      return _next(new UnauthorizedError(err));
    }
  });
}

function auth(userName, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ where: { userName } });
      const isMatch = await compare(password, user.password);
      if (isMatch) {
        resolve(user);
      } else {
        reject("Authentication Failed");
      }
    } catch (err) {
      reject("Authentication Failed");
    }
  });
}
