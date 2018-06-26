export class Kickerbox {
    id: number;
    name: string;
    location: string;
    model: string;

    constructor(id: number, name: string, location: string, model: string) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.model = model;
    }
}