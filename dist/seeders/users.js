"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const faker = require("faker");
const bcryptjs_1 = require("bcryptjs");
function seedUsers(nbr = 50) {
    return User_1.User.truncate({ cascade: true })
        .then(() => {
        console.log("Contact Trucated");
        bcryptjs_1.genSalt(10).then(salt => {
            bcryptjs_1.hash("139752684", salt).then(crypted => {
                User_1.User.create({
                    name: {
                        familyName: faker.name.firstName(),
                        givenName: faker.name.lastName()
                    },
                    emails: [],
                    phoneNumbers: [],
                    photo: null,
                    userName: "akremi",
                    password: crypted,
                    createdAt: new Date(),
                    lastModified: new Date()
                });
            });
        });
    })
        .catch(err => {
        console.log("Error truncating Contact", err);
    });
}
exports.seedUsers = seedUsers;
//# sourceMappingURL=users.js.map