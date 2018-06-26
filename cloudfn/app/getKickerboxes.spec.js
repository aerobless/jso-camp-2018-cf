"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const getKickerboxes_1 = require("./getKickerboxes");
describe('Entrypoint for Kickerbox REST endpoint', () => {
    it('returns some text', () => {
        chai_1.expect(getKickerboxes_1.getKickerboxes()).to.eql('Hoi du! Ich bin en REST Endpoint ^__^ ... oder au nöd 42');
    });
});
//# sourceMappingURL=getKickerboxes.spec.js.map