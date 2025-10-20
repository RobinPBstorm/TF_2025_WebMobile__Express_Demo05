import pokemonService from "../services/pokemon.service.js";
import {pokemonDetailDTO} from "../DTO/pokemon.dto.js"

const pokemonController = {
    getAll: async (req,res) => {
        const pokemons = await pokemonService.getAll();
        res.json(pokemons);
    },
    getById: async (req,res) => {
        const pokemonId = parseInt(req.params.id);

        const pokemon = await pokemonService.getById(pokemonId);
    
        if (!pokemon) {
            res.sendStatus(404);
            return;
        }
        res.json(pokemon);
    },
    add: async (req,res) => {
        const data = req.body;
        const pokemonDB = await pokemonService.getById(data.id);

        if (pokemonDB) {
            res.sendStatus(400);
            return;
        }

        const pokemon = await pokemonService.add(data);
        const pokemonDTO = new pokemonDetailDTO(pokemon);

        res.sendStatus(201);
        res.location('api/pokemon/'+ pokemonDTO.id);
        res.json(pokemonDTO);
    },
    delete: async (req,res) => {
        const pokemonId = parseInt(req.params.id);
        const isDeleted = await pokemonService.delete(pokemonId);

        if(isDeleted) {
            res.sendStatus(204);
        }
        else {
            res.sendStatus(404);
        }
    },
    update: (req,res) => {
        res.sendStatus(501);
    },
}

export default pokemonController;