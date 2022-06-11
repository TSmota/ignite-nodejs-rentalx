import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.get("/", (request, response) => {
    const categories = categoriesRepository.list();

    return response.json(categories);
});

categoriesRoutes.post("/", async (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    try {
        await createCategoryService.execute({ name, description });
    } catch (error) {
        if (error instanceof Error) {
            return response.status(400).json({ error: error.message });
        }
    }

    return response.status(201).send();
});

export { categoriesRoutes };
