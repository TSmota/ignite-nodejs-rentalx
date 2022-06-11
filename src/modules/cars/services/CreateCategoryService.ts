import { Category } from "../model/Category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ name, description }: IRequest): Promise<Category> {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists");
        }

        if (!name || !description) {
            throw new Error("Name and description are required");
        }

        return this.categoriesRepository.create({
            name,
            description,
        });
    }
}
