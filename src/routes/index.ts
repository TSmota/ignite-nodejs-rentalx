import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const appRoutes = Router();

appRoutes.use("/specifications", specificationsRoutes);
appRoutes.use("/categories", categoriesRoutes);

export { appRoutes };
