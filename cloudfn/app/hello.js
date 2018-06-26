"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
function helloFn() {
    const now = moment();
    const later = moment().add(6, 'w');
    const n = later.diff(now, 'd');
    return 'Hoi du! Ich bin en REST Endpoint ^__^ ... oder au nöd' + n;
}
exports.helloFn = helloFn;
//# sourceMappingURL=hello.js.map