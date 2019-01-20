import { Group } from "../models/Group";

const groups: any[] = [
  { id: 1, display: "Clients", level: 1, parentId: null },
  { id: 2, display: "Fournisseurs", level: 1, parentId: null },
  { id: 3, display: "Collaborateurs", level: 1, parentId: null },
  { id: 4, display: "Propriétaires", level: 1, parentId: null },
  { id: 5, display: "Autres", level: 1, parentId: null }
];

export function seedGroups(nbr = 50) {
  return Group.truncate({ cascade: true })
    .then(() => {
      console.log("Group Trucated");
      return Group.bulkCreate(groups);
    })
    .catch(err => {
      console.log("Error truncating Group", err);
    });
}
