import { pokemonListItemDTO } from "../DTO/pokemon.dto.js";
import db from "../models/index.js";

const pokemonService = {
    getAll: async () => {
        // return pokemons
        //     .map(p => new pokemonListItemDTO(p));
        return await db.Pokemon.findAll();
    },
    getById: async (id) => {
        const pokemon = await db.Pokemon.findOne({
            where: { id: id }
        });
        return pokemon;
    },
    add: async (data) => {
        const pokemon = data;

        const newPokemon = await db.Pokemon.create(pokemon);
        return newPokemon;
    },
    update: (id, data) => {

    },
    delete: async (id) => {
        const nbRowDeleted = await db.Pokemon.destroy({
            where: {id: id}
        });

        return nbRowDeleted === 1;
    }
}

export default pokemonService;