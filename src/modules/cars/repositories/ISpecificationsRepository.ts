import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create(specification: ICreateSpecificationDTO): Specification;
    findByName(name: string): Specification | undefined;
    getAll(): Specification[];
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
