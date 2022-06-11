import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category | undefined;
    list(): Category[];
    create(category: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
