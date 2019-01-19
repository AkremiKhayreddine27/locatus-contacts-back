import {
  Table,
  Column,
  Model,
  BelongsTo,
  DataType,
  ForeignKey
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
}
