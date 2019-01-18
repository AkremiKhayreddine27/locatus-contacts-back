import { Schema, model } from "mongoose";
export const ActivitySchema = new Schema(
  {
    display: {
      type: Schema.Types.String
    },
    level: {
      type: Schema.Types.Number,
      default: 1
    },
    parentId: {
      type: Schema.Types.String
    }
  },
  { timestamps: { updatedAt: "lastModified", createdAt: "createdAt" } }
);

export const Activity = model("Activity", ActivitySchema);
