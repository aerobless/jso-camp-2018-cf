"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getKickerboxes_1 = require("./app/getKickerboxes");
function get(req, res) {
    try {
        const result = getKickerboxes_1.getKickerboxes();
        res.status(200);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
}
exports.get = get;
;
//# sourceMappingURL=index.js.map