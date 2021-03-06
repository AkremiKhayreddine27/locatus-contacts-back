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
var Group_1;
const sequelize_typescript_1 = require("sequelize-typescript");
const Contact_1 = require("./Contact");
let Group = Group_1 = class Group extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", Object)
], Group.prototype, "display", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Object)
], Group.prototype, "level", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Group_1),
    __metadata("design:type", Object)
], Group.prototype, "parentId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Group_1),
    __metadata("design:type", Object)
], Group.prototype, "parent", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Contact_1.Contact, "ContactGroup", "groupId", "contactId"),
    __metadata("design:type", Object)
], Group.prototype, "contacts", void 0);
Group = Group_1 = __decorate([
    sequelize_typescript_1.Table
], Group);
exports.Group = Group;
//# sourceMappingURL=Group.js.map