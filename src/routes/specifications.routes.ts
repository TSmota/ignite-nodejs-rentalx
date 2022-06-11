import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.get("/", async (req, res) => {
    return listSpecificationsController.handle(req, res);
});

specificationsRoutes.post("/", async (req, res) => {
    return createSpecificationController.handle(req, res);
});

export { specificationsRoutes };
