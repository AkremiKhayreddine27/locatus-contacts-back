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
      type: Schema.Types.String,
      set: deleteEmpty
    }
  },
  { timestamps: { updatedAt: "lastModified", createdAt: "createdAt" } }
);

function deleteEmpty(v: any) {
  if (v == null) {
    return undefined;
  }
  return v;
}

export const Activity = model("Activity", ActivitySchema);
