import { Router } from "express";
import typeController from "../controllers/type.controller.js";

const typeRouter = Router();

typeRouter.route('/')
    .get(typeController.getAll)
    .post(typeController.add);

typeRouter.route('/:id')
    .get(typeController.getById)
    .delete(typeController.delete)
    // prévu pour modifier l'intégralité d'un pokémon
    .put(typeController.update)
    // prévu pour modifier certain champ
    .patch(typeController.patch);

// /!\ aux noms des ids pour pouvoir les récupérer dans le controller
typeRouter.route('/:typeId/pokemon')
    .get(typeController.getPokemonByType)

typeRouter.route('/:typeId/weakness')
    .get(typeController.getWeakness)

typeRouter.route('/:typeId/weakness/:type2Id')
    .post(typeController.addWeakness)
    .delete(typeController.removeWeakness)

export default typeRouter;