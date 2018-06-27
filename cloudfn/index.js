"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kickerboxManager_1 = require("./app/kickerboxManager");
const apiError_1 = require("./app/apiError");
function get(req, res) {
    let kickerboxManager = new kickerboxManager_1.KickerboxManager();
    try {
        if (req.path) {
            const kickerboxId = req.path.substring(1);
            const result = kickerboxManager.getKickerBox(Number(kickerboxId));
            if (result) {
                res.status(200);
                res.send(result);
            }
            res.status(404);
            res.send(new apiError_1.ApiError(404, "NotFound", "Entry " + kickerboxId + " not found."));
        }
        else {
            const result = kickerboxManager.getKickerBoxes();
            res.status(200);
            res.send(result);
        }
    }
    catch (err) {
        res.status(500);
        res.send(new apiError_1.ApiError(500, "InternalError", err));
    }
}
exports.get = get;
//# sourceMappingURL=index.js.map