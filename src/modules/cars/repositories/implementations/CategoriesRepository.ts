import { Category } from "../../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoryRepository implements ICategoriesRepository {
    private static INSTANCE: CategoryRepository;

    private constructor(private categories: Category[] = []) {}

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }

        return CategoryRepository.INSTANCE;
    }

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
