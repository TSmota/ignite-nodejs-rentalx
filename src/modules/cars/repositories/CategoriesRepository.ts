import { Category } from "../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

export class CategoryRepository implements ICategoriesRepository {
    constructor(private categories: Category[] = []) {}

    create({ name, description }: ICreateCategoryDTO) {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);

        return category;
    }

    getAll(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        return this.categories.find((category) => category.name === name);
    }
}
