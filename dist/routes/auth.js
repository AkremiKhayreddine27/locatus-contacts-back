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
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../models/User");
const config_1 = require("../config");
function authRoutes(server) {
    server.post("/register", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, emails, phoneNumbers, photo, userName, password } = _req.body;
            yield bcryptjs_1.genSalt(10).then(salt => {
                bcryptjs_1.hash(password, salt).then(crypted => {
                    User_1.User.create({
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
        }
        catch (err) {
            return _next(new restify_errors_1.InternalError(err.message));
        }
    }));
    server.post("/auth", (_req, _res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { userName, password } = _req.body;
            const user = yield auth(userName, password);
            const token = jsonwebtoken_1.sign(user.toJSON(), config_1.config.JWT_SECRET, {
                expiresIn: "15m"
            });
            const { iat, exp } = jsonwebtoken_1.decode(token);
            _res.send({ iat, exp, token });
            _next();
        }
        catch (err) {
            return _next(new restify_errors_1.UnauthorizedError(err));
        }
    }));
}
exports.authRoutes = authRoutes;
function auth(userName, password) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield User_1.User.findOne({ where: { userName } });
            const isMatch = yield bcryptjs_1.compare(password, user.password);
            if (isMatch) {
                resolve(user);
            }
            else {
                reject("Authentication Failed");
            }
        }
        catch (err) {
            reject("Authentication Failed");
        }
    }));
}
//# sourceMappingURL=auth.js.map