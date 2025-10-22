import { pokemonListItemDTO } from "../DTO/pokemon.dto.js";
import db from "../models/index.js";

const pokemonService = {
    getAll: async () => {
        return (await db.Pokemon.findAll({
            order: [
                ['id', 'ASC']
            ]
        })).map(p => new pokemonListItemDTO(p));
    },
    getById: async (id) => {
        const pokemon = await db.Pokemon.findOne({
            include: [
                {
                    model:db.Type,
                    as: 'type1'
                },
                {
                    model:db.Type,
                    as: 'type2'
                },
            ],
            where: { id: id }
        });
        return pokemon;
    },
    add: async (data) => {
        const pokemon = data;

        const newPokemon = await db.Pokemon.create(pokemon);
        return newPokemon;
    },
    update: async (id, data) => {
        const oldPokemon = await pokemonService.getById(id);

        if (!oldPokemon) {
            throw new Error('POKEMON_NOT_FOUND');
        }

        const nbRow = await db.Pokemon.update(data, {
            where : {id : id},
            returning: true
        });

        if (nbRow[0] === 1) {
            return pokemonService.getById(id);
        }
        return null;
    },
    delete: async (id) => {
        const nbRowDeleted = await db.Pokemon.destroy({
            where: {id: id}
        });

        return nbRowDeleted === 1;
    },
    addMove: async (pokemonId, moveId) => {
        const pokemon = await db.Pokemon.findOne({
            where : {id: pokemonId}
        });
        const move = await db.Move.findOne({
            where : {id: moveId}
        });

        // on doit vérifier si a bien récupérer un pokémon et une attaque

        await pokemon.addMove(move);

        return { pokemon, move };
    },
    getMove : async (pokemonId) => {
        const pokemon = await db.Pokemon.findOne({
            where : { id : pokemonId },
            include: [
                {
                    model: db.Move,
                    through: { attributes: [] }
                }
            ]
        });

        return pokemon;
    }
}

export default pokemonService;