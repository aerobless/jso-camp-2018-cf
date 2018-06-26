import {Kickerbox} from "./kickerbox";

export class KickerboxManager {

    kickerBoxList: Kickerbox[] = [
        new Kickerbox(1, "PrettyKickerbox", "Zühlke Tower", "ABC-1337"),
        new Kickerbox(2, "UglyKickerbox", "Elsewhere", "234-11")
    ];

    getKickerBoxes() {
        return this.kickerBoxList;
    }

    getKickerBox(i: number) {
        return this.kickerBoxList[i - 1];
    }
}