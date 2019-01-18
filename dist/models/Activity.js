"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.ActivitySchema = new mongoose_1.Schema({
    display: {
        type: mongoose_1.Schema.Types.String
    },
    level: {
        type: mongoose_1.Schema.Types.Number,
        default: 1
    },
    parentId: {
        type: mongoose_1.Schema.Types.Mixed
    }
}, { timestamps: { updatedAt: "lastModified", createdAt: "createdAt" } });
exports.Activity = mongoose_1.model("Activity", exports.ActivitySchema);
