import {
  Table,
  Column,
  Model,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  DataType,
  ForeignKey,
  BelongsToMany
} from "sequelize-typescript";
import { Group } from "./Group";
import { Activity } from "./Activity";

@Table
export class Contact extends Model<Contact> {
  @ForeignKey(() => Contact)
  id;

  @Column(DataType.JSON)
  name;

  @BelongsTo(() => Contact)
  company;

  @AllowNull
  @Column(DataType.STRING)
  job;

  @Column(DataType.BOOLEAN)
  followed;

  @Column(DataType.ARRAY(DataType.JSON))
  emails;

  @Column(DataType.ARRAY(DataType.JSON))
  addresses;

  @Column(DataType.INTEGER)
  externalId;

  @Column(DataType.ARRAY(DataType.JSON))
  phoneNumbers;

  @Column(DataType.STRING)
  photo;

  @Column(DataType.ARRAY(DataType.JSON))
  rate;

  @Column(DataType.STRING)
  title;

  @Column(DataType.STRING)
  userName;

  @Column(DataType.STRING)
  userType;

  @Column(DataType.STRING)
  visibility;

  @Column(DataType.STRING)
  webSite;

  @Column(DataType.BOOLEAN)
  active;

  @BelongsToMany(() => Group, "contacts_groups", "contactId", "groupId")
  groups;

  @BelongsToMany(
    () => Activity,
    "contacts_activities",
    "contactId",
    "activityId"
  )
  activities;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  lastModified!: Date;
}
