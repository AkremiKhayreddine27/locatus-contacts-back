import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class ContactGroup extends Model<ContactGroup> {
  @Column(DataType.INTEGER)
  groupId;

  @Column(DataType.INTEGER)
  contactId;
}
