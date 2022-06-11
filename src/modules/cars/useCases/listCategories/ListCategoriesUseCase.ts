import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private repository: ICategoriesRepository) {}

    async execute(): Promise<Category[]> {
        return this.repository.getAll();
    }
}

export { ListCategoriesUseCase };
