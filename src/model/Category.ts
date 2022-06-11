import { v4 as uuidv4 } from "uuid";

export class Category {
    public id: string;
    public name: string;
    public description: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor() {
        this.id = uuidv4();
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.name = "";
        this.description = "";
    }
}
