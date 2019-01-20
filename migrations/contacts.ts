import { db } from "../db";
import { Sequelize } from "sequelize-typescript";

export async function migrate() {
  try {
    await db.getQueryInterface().dropAllTables();
    await db.getQueryInterface().createTable("User", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.JSON
      },
      emails: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      phoneNumbers: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      photo: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      lastModified: {
        type: Sequelize.DATE
      }
    });
    await db.getQueryInterface().createTable("Contact", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.JSON
      },
      companyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contact",
          key: "id"
        }
      },
      job: {
        type: Sequelize.STRING
      },
      followed: {
        type: Sequelize.BOOLEAN
      },
      emails: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      addresses: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      phoneNumbers: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      rate: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      externalId: {
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      userType: {
        type: Sequelize.STRING
      },
      visibility: {
        type: Sequelize.STRING
      },
      webSite: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      lastModified: {
        type: Sequelize.DATE
      }
    });
    await db.getQueryInterface().createTable("Group", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      display: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      parentId: {
        type: Sequelize.INTEGER
      }
    });
    await db.getQueryInterface().createTable("Activity", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      display: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      parentId: {
        type: Sequelize.INTEGER
      }
    });
    await db.getQueryInterface().createTable("contacts_groups", {
      contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contact",
          key: "id"
        },
        onDelete: "cascade"
      },
      groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Group",
          key: "id"
        },
        onDelete: "cascade"
      }
    });
    await db.getQueryInterface().createTable("contacts_activities", {
      contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contact",
          key: "id"
        },
        onDelete: "cascade"
      },
      activityId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Activity",
          key: "id"
        },
        onDelete: "cascade"
      }
    });
  } catch (err) {
    console.log("Error Migrating Database", err);
  }
}
