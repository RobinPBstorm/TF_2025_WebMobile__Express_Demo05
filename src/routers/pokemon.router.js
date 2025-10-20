import { Router } from "express";
import pokemonController from "../controllers/pokemon.controller.js";

const pokemonRouter = Router();

pokemonRouter.route('/')
    .get(pokemonController.getAll)
    .post(pokemonController.add);

pokemonRouter.route('/:id')
    .get(pokemonController.getById)
    .delete(pokemonController.delete)
    .put(pokemonController.update);

export default pokemonRouter;