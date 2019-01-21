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
const db_1 = require("../db");
const sequelize_typescript_1 = require("sequelize-typescript");
function migrate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.db.getQueryInterface().dropAllTables();
            yield db_1.db.getQueryInterface().createTable("User", {
                id: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: sequelize_typescript_1.Sequelize.JSON
                },
                emails: {
                    type: sequelize_typescript_1.Sequelize.ARRAY(sequelize_typescript_1.Sequelize.JSON)
                },
                phoneNumbers: {
                    type: sequelize_typescript_1.Sequelize.ARRAY(sequelize_typescript_1.Sequelize.JSON)
                },
                photo: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                userName: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                password: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                createdAt: {
                    type: sequelize_typescript_1.Sequelize.DATE
                },
                lastModified: {
                    type: sequelize_typescript_1.Sequelize.DATE
                }
            });
            yield db_1.db.getQueryInterface().createTable("Contact", {
                id: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: sequelize_typescript_1.Sequelize.JSON
                },
                companyId: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    references: {
                        model: "Contact",
                        key: "id"
                    }
                },
                job: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                followed: {
                    type: sequelize_typescript_1.Sequelize.BOOLEAN
                },
                active: {
                    type: sequelize_typescript_1.Sequelize.BOOLEAN
                },
                emails: {
                    type: sequelize_typescript_1.Sequelize.ARRAY(sequelize_typescript_1.Sequelize.JSON)
                },
                addresses: {
                    type: sequelize_typescript_1.Sequelize.ARRAY(sequelize_typescript_1.Sequelize.JSON)
                },
                phoneNumbers: {
                    type: sequelize_typescript_1.Sequelize.ARRAY(sequelize_typescript_1.Sequelize.JSON)
                },
                rate: {
                    type: sequelize_typescript_1.Sequelize.ARRAY(sequelize_typescript_1.Sequelize.JSON)
                },
                externalId: {
                    type: sequelize_typescript_1.Sequelize.INTEGER
                },
                photo: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                title: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                userName: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                userType: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                visibility: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                webSite: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                createdAt: {
                    type: sequelize_typescript_1.Sequelize.DATE
                },
                lastModified: {
                    type: sequelize_typescript_1.Sequelize.DATE
                }
            });
            yield db_1.db.getQueryInterface().createTable("Group", {
                id: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                display: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                level: {
                    type: sequelize_typescript_1.Sequelize.INTEGER
                },
                parentId: {
                    type: sequelize_typescript_1.Sequelize.INTEGER
                }
            });
            yield db_1.db.getQueryInterface().createTable("Activity", {
                id: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                display: {
                    type: sequelize_typescript_1.Sequelize.STRING
                },
                level: {
                    type: sequelize_typescript_1.Sequelize.INTEGER
                },
                parentId: {
                    type: sequelize_typescript_1.Sequelize.INTEGER
                }
            });
            yield db_1.db.getQueryInterface().createTable("ContactGroup", {
                id: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                contactId: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    references: {
                        model: "Contact",
                        key: "id"
                    },
                    onDelete: "cascade"
                },
                groupId: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    references: {
                        model: "Group",
                        key: "id"
                    },
                    onDelete: "cascade"
                }
            });
            yield db_1.db.getQueryInterface().createTable("ContactActivity", {
                id: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                contactId: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    references: {
                        model: "Contact",
                        key: "id"
                    },
                    onDelete: "cascade"
                },
                activityId: {
                    type: sequelize_typescript_1.Sequelize.INTEGER,
                    references: {
                        model: "Activity",
                        key: "id"
                    },
                    onDelete: "cascade"
                }
            });
        }
        catch (err) {
            console.log("Error Migrating Database", err);
        }
    });
}
exports.migrate = migrate;
//# sourceMappingURL=contacts.js.map