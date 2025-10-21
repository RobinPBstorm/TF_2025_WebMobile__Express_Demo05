import { Router } from "express";
import pokemonController from "../controllers/pokemon.controller.js";

const pokemonRouter = Router();

pokemonRouter.route('/')
    .get(pokemonController.getAll)
    .post(pokemonController.add);

pokemonRouter.route('/:id')
    .get(pokemonController.getById)
    .delete(pokemonController.delete)
    // prévu pour modifier l'intégralité d'un pokémon
    .put(pokemonController.update)
    // prévu pour modifier certain champ
    .patch(pokemonController.patch);

export default pokemonRouter;