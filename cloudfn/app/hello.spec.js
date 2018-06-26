"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hello_1 = require("./hello");
describe('Hello function', () => {
    it('returns hello world', () => {
        chai_1.expect(hello_1.helloFn()).to.eql('Hoi du! Ich bin en REST Endpoint ^__^ ... oder au nöd 42');
    });
});
//# sourceMappingURL=hello.spec.js.map