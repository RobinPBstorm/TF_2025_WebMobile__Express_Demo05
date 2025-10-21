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
            res.status(404);
            res.json({message: 'pokemon non trouvé'})
            return;
        }
        res.json(pokemon);
    },
    add: async (req,res) => {
        const data = req.body;
        const pokemonDB = await pokemonService.getById(data.id);

        if (pokemonDB) {
            res.status(400);
            res.json({message: "pokemon déjà présent"})
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
    update: async (req,res) => {
        try {
            const id = parseInt(req.params.id);
            const data = req.body;

            const pokemonUpdated = await pokemonService.update(id, data);

            res.status(200);
            res.json(pokemonUpdated);
        }
        catch (error){
            switch (error.message){
                case 'POKEMON_NOT_FOUND':
                    res.status(404);
                    res.json({message: "Pokemon non trouvé"});
                    break;
                default:
                    res.status(400);
                    res.json({message: error})
                    break;
            }
        }
    },
    patch:async (req,res) => {
        try {
            const id = parseInt(req.params.id);
            const data = req.body;

            const pokemonUpdated = await pokemonService.update(id, data);

            res.status(200);
            res.json(pokemonUpdated);
        }
        catch (error){
            switch (error.message){
                case 'POKEMON_NOT_FOUND':
                    res.status(404);
                    res.json({message: "Pokemon non trouvé"});
                    break;
                default:
                    res.status(400);
                    res.json({message: error})
                    break;
            }
        }
    },
}

export default pokemonController;