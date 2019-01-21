import {
  Table,
  Column,
  Model,
  BelongsTo,
  DataType,
  ForeignKey,
  BelongsToMany
} from "sequelize-typescript";
import { Contact } from "./Contact";

@Table
export class Group extends Model<Group> {
  @Column(DataType.STRING)
  display;

  @Column(DataType.INTEGER)
  level;

  @ForeignKey(() => Group)
  parentId;

  @BelongsTo(() => Group)
  parent;

  @BelongsToMany(() => Contact, "ContactGroup", "groupId", "contactId")
  contacts;
}
