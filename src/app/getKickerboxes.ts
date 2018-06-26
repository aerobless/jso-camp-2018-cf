import {Kickerbox} from "./kickerbox";

export function getKickerboxes() {

    let kickerbox1 = new Kickerbox(1, "PrettyKickerbox", "Zühlke Tower", "ABC-1337");
    let kickerbox2 = new Kickerbox(2, "UglyKickerbox", "Elsewhere", "234-11");

    let kickerBoxList: Kickerbox[] = [kickerbox1, kickerbox2];

    return kickerBoxList;
}
