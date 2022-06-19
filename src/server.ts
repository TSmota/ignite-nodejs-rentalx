import express from "express";
import swaggerUI from "swagger-ui-express";

import { appRoutes } from "./routes";
import swaggerDoc from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(appRoutes);

app.listen(3333, () => {
    console.log("Server started on port 3333");
});
