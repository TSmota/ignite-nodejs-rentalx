import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category | undefined;
    getAll(): Category[];
    create(category: ICreateCategoryDTO): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };
