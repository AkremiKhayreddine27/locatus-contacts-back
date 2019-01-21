import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  HasMany,
  BelongsToMany
} from "sequelize-typescript";
import { Contact } from "./Contact";

@Table
export class Activity extends Model<Activity> {
  @Column(DataType.STRING)
  display;

  @Column(DataType.INTEGER)
  level;

  @ForeignKey(() => Activity)
  parentId;

  @HasMany(() => Activity)
  children;

  @BelongsToMany(() => Contact, "contacts_activities", "activityId", "contactId")
  contacts;
}
