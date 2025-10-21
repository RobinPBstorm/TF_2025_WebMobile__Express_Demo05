export class typeListItemDTO {
    id;
    name;

    constructor(data){
        this.id = data.id;
        this.name = data.name;
    }
}

export class typeDetailDTO {
    id;
    name;
    image;

    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.image = data.image;
    }
}