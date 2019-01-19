import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  HasMany
} from "sequelize-typescript";

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
}
