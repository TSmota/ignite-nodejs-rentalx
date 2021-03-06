import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const categories = await this.listSpecificationsUseCase.execute();

        return response.json(categories);
    }
}

export { ListSpecificationsController };
