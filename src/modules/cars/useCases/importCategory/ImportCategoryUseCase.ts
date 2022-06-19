import { parse } from "csv-parse";
import * as fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategoryUseCaseDTO {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(
        file: Express.Multer.File
    ): Promise<IImportCategoryUseCaseDTO[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategoryUseCaseDTO[] = [];
            const parser = parse();

            stream.pipe(parser);

            parser
                .on("data", (line) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    resolve(categories);
                })
                .on("error", (error) => {
                    reject(error);
                });
        });
    }

    async execute(file: Express.Multer.File) {
        const categories = await this.loadCategories(file);

        categories.forEach((category) => {
            const { name, description } = category;

            const categoryExists = this.categoriesRepository.findByName(name);
            if (!categoryExists) {
                this.categoriesRepository.create({ name, description });
            }
        });
    }
}

export { ImportCategoryUseCase };
