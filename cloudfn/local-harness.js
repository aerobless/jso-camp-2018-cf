"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const fakeReq = {};
const fakeResponse = {
    send: (x) => console.log('output', x),
    status: (x) => console.log('status', x)
};
index_1.get(fakeReq, fakeResponse);
//# sourceMappingURL=local-harness.js.map