import { Specification } from "../../model/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private static INSTANCE: SpecificationsRepository;

    private constructor(private specifications: Specification[] = []) {}

    public static getInstance(): SpecificationsRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new SpecificationsRepository();
        }

        return this.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO) {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });

        this.specifications.push(specification);
        return specification;
    }

    getAll(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification | undefined {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }
}

export { SpecificationsRepository };
