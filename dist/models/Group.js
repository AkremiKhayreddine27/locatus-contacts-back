"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.GroupSchema = new mongoose_1.Schema({
    display: {
        type: mongoose_1.Schema.Types.String
    },
    level: {
        type: mongoose_1.Schema.Types.Number,
        default: 1
    },
    parentId: {
        type: mongoose_1.Schema.Types.String,
        set: deleteEmpty
    }
}, { timestamps: { updatedAt: "lastModified", createdAt: "createdAt" } });
function deleteEmpty(v) {
    if (v == null) {
        return undefined;
    }
    return v;
}
exports.Group = mongoose_1.model("Group", exports.GroupSchema);
