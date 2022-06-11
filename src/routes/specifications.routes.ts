import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.get("/", async (req, res) => {
    const specifications = specificationsRepository.getAll();
    return res.json(specifications);
});

specificationsRoutes.post("/", async (req, res) => {
    const { name, description } = req.body;
    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );

    try {
        await createSpecificationService.execute({
            name,
            description,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }

    return res.status(201).send();
});

export { specificationsRoutes };
