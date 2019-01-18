import { Schema, model } from "mongoose";
import { ActivitySchema } from "./Activity";
import { GroupSchema } from "./Group";
const ContactSchema = new Schema(
  {
    name: {
      type: Schema.Types.Mixed,
      required: true,
      trim: true
    },
    companyId: {
      type: Schema.Types.String
    },
    activities: [ActivitySchema],
    groups: [GroupSchema],
    job: {
      type: Schema.Types.String
    },
    followed: {
      type: Schema.Types.Boolean,
      default: false
    },
    emails: {
      type: Schema.Types.Array
    },
    addresses: {
      type: Schema.Types.Array
    },
    externalId: {
      type: Schema.Types.String
    },
    phoneNumbers: {
      type: Schema.Types.Array
    },
    photo: {
      type: Schema.Types.String
    },
    rate: {
      type: Schema.Types.Array
    },
    title: {
      type: Schema.Types.String
    },
    userName: {
      type: Schema.Types.String
    },
    userType: { type: Schema.Types.String },
    visibility: { type: Schema.Types.String },
    webSite: { type: Schema.Types.String }
  },
  { timestamps: { updatedAt: "lastModified", createdAt: "createdAt" } }
);

export const Contact = model("Contact", ContactSchema);
