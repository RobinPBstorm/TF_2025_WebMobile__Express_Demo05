
export function pokemonMoveModel(sequelize){
    const PokemonMove = sequelize.define(
        'pokemonMove', {}, {}
    );
    return PokemonMove;
}