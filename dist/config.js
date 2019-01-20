"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || "http://localhost:3000",
    PG_HOST: process.env.PG_HOST || "ec2-54-75-230-41.eu-west-1.compute.amazonaws.com",
    PG_DATABASE: process.env.PG_DATABASE || "dbggc6gdl4nv81",
    PG_USER: process.env.PG_USER || "rvcafnjmsjokrz",
    PG_PORT: process.env.PG_PORT || "5432",
    PG_PASSWORD: process.env.PG_PASSWORD ||
        "ad1fdd9f25f90e48d0d76bf4e17e0110f28e0b9f70be1774188efa57ab727c8b",
    PG_URI: process.env.PG_URI ||
        "postgres://rvcafnjmsjokrz:ad1fdd9f25f90e48d0d76bf4e17e0110f28e0b9f70be1774188efa57ab727c8b@ec2-54-75-230-41.eu-west-1.compute.amazonaws.com:5432/dbggc6gdl4nv81",
    JWT_SECRET: process.env.JWT_SECRET || "secret123"
};
//# sourceMappingURL=config.js.map