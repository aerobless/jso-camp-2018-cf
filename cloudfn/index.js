"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./app/hello");
function hello(req, res) {
    try {
        const result = hello_1.helloFn();
        res.status(200);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
}
exports.hello = hello;
;
//# sourceMappingURL=index.js.map