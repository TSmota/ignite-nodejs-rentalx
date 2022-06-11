import { Category } from "../../model/Category";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private repository: ISpecificationsRepository) {}

    async execute(): Promise<Category[]> {
        return this.repository.getAll();
    }
}

export { ListSpecificationsUseCase };
