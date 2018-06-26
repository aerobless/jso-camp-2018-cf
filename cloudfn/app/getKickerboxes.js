"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kickerbox_1 = require("./kickerbox");
function getKickerboxes() {
    let kickerbox1 = new kickerbox_1.Kickerbox(1, "PrettyKickerbox", "Zühlke Tower", "ABC-1337");
    let kickerbox2 = new kickerbox_1.Kickerbox(2, "UglyKickerbox", "Elsewhere", "234-11");
    let kickerBoxList = [kickerbox1, kickerbox2];
    return kickerBoxList;
}
exports.getKickerboxes = getKickerboxes;
//# sourceMappingURL=getKickerboxes.js.map