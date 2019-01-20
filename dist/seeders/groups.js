"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Group_1 = require("../models/Group");
const groups = [
    { id: 1, display: "Clients", level: 1, parentId: null },
    { id: 2, display: "Fournisseurs", level: 1, parentId: null },
    { id: 3, display: "Collaborateurs", level: 1, parentId: null },
    { id: 4, display: "Propriétaires", level: 1, parentId: null },
    { id: 5, display: "Autres", level: 1, parentId: null }
];
function seedGroups(nbr = 50) {
    return Group_1.Group.truncate({ cascade: true })
        .then(() => {
        console.log("Group Trucated");
        return Group_1.Group.bulkCreate(groups);
    })
        .catch(err => {
        console.log("Error truncating Group", err);
    });
}
exports.seedGroups = seedGroups;
//# sourceMappingURL=groups.js.map