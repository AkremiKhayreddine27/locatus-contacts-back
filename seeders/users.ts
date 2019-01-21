import { User } from "../models/User";
import * as faker from "faker";
import { hash, genSalt } from "bcryptjs";

export function seedUsers(nbr = 50) {
  return User.truncate({ cascade: true })
    .then(() => {
      console.log("Contact Trucated");
      genSalt(10).then(salt => {
        hash("139752684", salt).then(crypted => {
          User.create({
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
