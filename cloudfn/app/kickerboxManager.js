"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kickerbox_1 = require("./kickerbox");
class KickerboxManager {
    constructor() {
        this.kickerBoxList = [
            new kickerbox_1.Kickerbox(1, "PrettyKickerbox", "Zühlke Tower", "ABC-1337"),
            new kickerbox_1.Kickerbox(2, "UglyKickerbox", "Elsewhere", "234-11")
        ];
    }
    getKickerBoxes() {
        return this.kickerBoxList;
    }
    getKickerBox(i) {
        return this.kickerBoxList[i - 1];
    }
}
exports.KickerboxManager = KickerboxManager;
//# sourceMappingURL=kickerboxManager.js.map