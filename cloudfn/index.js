"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kickerboxManager_1 = require("./app/kickerboxManager");
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
            res.send("Entry" + kickerboxId + " not found.");
        }
        else {
            const result = kickerboxManager.getKickerBoxes();
            res.status(200);
            res.send(result);
        }
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
}
exports.get = get;
//# sourceMappingURL=index.js.map