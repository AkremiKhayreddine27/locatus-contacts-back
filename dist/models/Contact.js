"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Activity_1 = require("./Activity");
var Group_1 = require("./Group");
var ContactSchema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
        trim: true
    },
    companyId: {
        type: mongoose_1.Schema.Types.String
    },
    activities: [Activity_1.ActivitySchema],
    groups: [Group_1.GroupSchema],
    job: {
        type: mongoose_1.Schema.Types.String
    },
    followed: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false
    },
    emails: {
        type: mongoose_1.Schema.Types.Array
    },
    addresses: {
        type: mongoose_1.Schema.Types.Array
    },
    externalId: {
        type: mongoose_1.Schema.Types.String
    },
    phoneNumbers: {
        type: mongoose_1.Schema.Types.Array
    },
    photo: {
        type: mongoose_1.Schema.Types.String
    },
    rate: {
        type: mongoose_1.Schema.Types.Array
    },
    title: {
        type: mongoose_1.Schema.Types.String
    },
    userName: {
        type: mongoose_1.Schema.Types.String
    },
    userType: { type: mongoose_1.Schema.Types.String },
    visibility: { type: mongoose_1.Schema.Types.String },
    webSite: { type: mongoose_1.Schema.Types.String }
}, { timestamps: { updatedAt: "lastModified", createdAt: "createdAt" } });
exports.Contact = mongoose_1.model("Contact", ContactSchema);
