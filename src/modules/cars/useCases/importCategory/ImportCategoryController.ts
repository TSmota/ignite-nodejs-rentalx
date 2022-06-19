import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

    handle(request: Request, response: Response) {
        const { file } = request;
        this.importCategoryUseCase.execute(<Express.Multer.File>file);

        return response.send();
    }
}

export { ImportCategoryController };