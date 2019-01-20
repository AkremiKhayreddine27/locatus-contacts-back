import {
  Table,
  Column,
  Model,
  BelongsTo,
  DataType,
  ForeignKey,
  BelongsToMany
} from "sequelize-typescript";

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

  @BelongsToMany(() => Group, "contacts_groups", "groupId", "contactId")
  contacts;
}
