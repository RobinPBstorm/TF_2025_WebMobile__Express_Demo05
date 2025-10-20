import { pokemonListItemDTO } from "../DTO/pokemon.dto.js";

const pokemons = [
    {
        id: 1, 
        name: "Bulbizarre", 
        description: "C'est un dinosaure de type plante avec un bulbe sur le dos", 
        image: "", 
        hp: 45,
        defense: 49,
        attack: 49,
        defenseSP: 65,
        attackSP: 65,
        vitesse: 45
    },
    {
        id: 720, 
        name: "Hoopa", 
        description: "C'est sonic et ça passera nickel.", 
        image: "", 
        hp: 80,
        defense: 60,
        attack: 110,
        defenseSP: 130,
        attackSP: 150,
        speed: 70
    }
];

const pokemonService = {
    getAll: () => {
        return pokemons
            .map(p => new pokemonListItemDTO(p));
    },
    getById: (id) => {

    },
    add: (data) => {

    },
    update: (id, data) => {

    },
    delete: (id) => {

    }
}

export default pokemonService;