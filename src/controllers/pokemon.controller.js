import pokemonService from "../services/pokemon.service.js";

const pokemonController = {
    getAll: (req,res) => {
        const pokemons = pokemonService.getAll();
        res.json(pokemons);
    },
    getById: (req,res) => {
        res.sendStatus(501);
    },
    add: (req,res) => {
        res.sendStatus(501);
    },
    delete: (req,res) => {
        res.sendStatus(501);
    },
    update: (req,res) => {
        res.sendStatus(501);
    },
}

export default pokemonController;