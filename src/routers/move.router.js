import { Router } from "express";
import moveController from "../controllers/move.controller.js";

const moveRouter = Router();

moveRouter.route('/')
    .get(moveController.getAll)
    .post(moveController.add);

moveRouter.route('/:moveId')
    .delete(moveController.delete);

export default moveRouter;