import { v4 as uuidv4 } from "uuid";

class Specification {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.id = uuidv4();
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.name = "";
        this.description = "";
    }
}

export { Specification };
