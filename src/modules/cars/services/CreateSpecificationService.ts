import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    async execute({ name, description }: IRequest) {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists");
        }

        if (!name || !description) {
            throw new Error("Name and description are required");
        }

        return this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationService };
