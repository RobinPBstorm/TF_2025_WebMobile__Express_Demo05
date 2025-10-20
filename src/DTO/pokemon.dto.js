export class pokemonListItemDTO {
    id;
    name;

    constructor(data){
        this.id = data.id;
        this.name = data.name;
    }
}

export class pokemonDetailDTO {
    id;
    name;
    description;
    image;
    hp;
    defense;
    attack;
    defenseSp;
    attackSp;
    speed;

    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.image = data.image;
        this.hp = data.hp;
        this.defense = data.defense;
        this.attack = data.attack;
        this.attackSp = data.attackSp;
        this.defenseSp = data.defenseSp;
        this.speed = data.speed;
    }
}