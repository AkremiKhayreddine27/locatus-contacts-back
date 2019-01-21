import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class ContactActivity extends Model<ContactActivity> {
  @Column(DataType.INTEGER)
  activityId;

  @Column(DataType.INTEGER)
  contactId;
}
