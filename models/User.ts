import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column(DataType.JSON)
  name;

  @Column(DataType.STRING)
  password;

  @Column(DataType.ARRAY(DataType.JSON))
  emails;

  @Column(DataType.ARRAY(DataType.JSON))
  phoneNumbers;

  @Column(DataType.STRING)
  photo;

  @Column(DataType.STRING)
  userName;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  lastModified!: Date;
}
