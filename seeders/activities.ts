import { Activity } from "../models/Activity";

const activities: any[] = [
  {
    id: 1,
    display: "Maintenances",
    level: 1,
    parentId: null
  },
  {
    id: 2,
    display: "Assurance",
    level: 1,
    parentId: null
  },
  {
    id: 3,
    display: "Impots & Taxes",
    level: 2,
    parentId: null
  },
  {
    id: 4,
    display: "Plomberie",
    level: 2,
    parentId: 1
  },
  {
    id: 5,
    display: "Electroménager",
    level: 2,
    parentId: 1
  },
  {
    id: 6,
    display: "Electricité",
    level: 2,
    parentId: 1
  },
  {
    id: 7,
    display: "Serrurie",
    level: 2,
    parentId: 1
  },
  {
    id: 8,
    display: "Chauffage",
    level: 2,
    parentId: 1
  },
  {
    id: 9,
    display: "Climatisation",
    level: 2,
    parentId: 1
  },
  {
    id: 10,
    display: "Habitation",
    level: 2,
    parentId: 2
  },
  {
    id: 11,
    display: "Crédit",
    level: 2,
    parentId: 2
  },
  {
    id: 12,
    display: "Autre",
    level: 2,
    parentId: 2
  },
  {
    id: 13,
    display: "Impôt sur le revenu",
    level: 2,
    parentId: 3
  },
  {
    id: 14,
    display: "Taxe Habitation",
    level: 2,
    parentId: 3
  },
  {
    id: 15,
    display: "Taxe Foncière",
    level: 2,
    parentId: 3
  }
];

export function seedActivities(nbr = 50) {
  return Activity.truncate({ cascade: true })
    .then(() => {
      console.log("Activity Trucated");
      return Activity.bulkCreate(activities);
    })
    .catch(err => {
      console.log("Error truncating Activity", err);
    });
}
