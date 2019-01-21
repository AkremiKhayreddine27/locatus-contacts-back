"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_1;
const sequelize_typescript_1 = require("sequelize-typescript");
const Group_1 = require("./Group");
const Activity_1 = require("./Activity");
let Contact = Contact_1 = class Contact extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => Contact_1),
    __metadata("design:type", Object)
], Contact.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSON),
    __metadata("design:type", Object)
], Contact.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Contact_1),
    __metadata("design:type", Object)
], Contact.prototype, "company", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", Object)
], Contact.prototype, "job", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Object)
], Contact.prototype, "followed", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON)),
    __metadata("design:type", Object)
], Contact.prototype, "emails", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON)),
    __metadata("design:type", Object)
], Contact.prototype, "addresses", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Object)
], Contact.prototype, "externalId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON)),
    __metadata("design:type", Object)
], Contact.prototype, "phoneNumbers", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", Object)
], Contact.prototype, "photo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON)),
    __metadata("design:type", Object)
], Contact.prototype, "rate", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", Object)
], Contact.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", Object)
], Contact.prototype, "userName", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", Object)
], Contact.prototype, "userType", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", Object)
], Contact.prototype, "visibility", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", Object)
], Contact.prototype, "webSite", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Object)
], Contact.prototype, "active", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Group_1.Group, "ContactGroup", "contactId", "groupId"),
    __metadata("design:type", Object)
], Contact.prototype, "groups", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Activity_1.Activity, "ContactActivity", "contactId", "activityId"),
    __metadata("design:type", Object)
], Contact.prototype, "activities", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Contact.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Contact.prototype, "lastModified", void 0);
Contact = Contact_1 = __decorate([
    sequelize_typescript_1.Table
], Contact);
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map