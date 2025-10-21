import typeService from "../services/type.service.js";
import { typeDetailDTO } from "../DTO/type.dto.js";

const typeController = {
    getAll: async (req,res) => {
        const types = await typeService.getAll();
        res.json(types);
    },
    getById: async (req,res) => {
        const typeId = parseInt(req.params.id);

        const type = await typeService.getById(typeId);
    
        if (!type) {
            res.status(404);
            res.json({message: 'Type non trouvé'})
            return;
        }
        res.json(type);
    },
    add: async (req,res) => {
        const data = req.body;

        const type = await typeService.add(data);
        const typeDTO = new typeDetailDTO(type);

        res.sendStatus(201);
        res.location('api/type/'+ typeDTO.id);
        res.json(typeDTO);
    },
    delete: async (req,res) => {
        const typeId = parseInt(req.params.id);
        const isDeleted = await typeService.delete(typeId);

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

            const typeUpdated = await typeService.update(id, data);

            res.status(200);
            res.json(typeUpdated);
        }
        catch (error){
            switch (error.message){
                case 'TYPE_NOT_FOUND':
                    res.status(404);
                    res.json({message: "Type non trouvé"});
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

            const typeUpdated = await typeService.update(id, data);

            res.status(200);
            res.json(typeUpdated);
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
    getPokemonByType: async (req,res) => {
        const typeId = parseInt(req.params.typeId);
        const pokemons = await typeService.getPokemonByType(typeId);

        res.status(200);
        res.json(pokemons);
    },
    getWeakness: async (req, res) => {
        const typeId = parseInt(req.params.typeId);
        const weaknesses = await typeService.getWeakness(typeId);

        res.status(200);
        res.json(weaknesses);
    },
    addWeakness: async (req, res) => {
        try {
            
        const typeId = parseInt(req.params.typeId);
        const weaknessTypeId = parseInt(req.params.type2Id);
        
        const {type, weaknessType} = await typeService.addWeakness(typeId, weaknessTypeId);

         res.status(200);
        res.json({
                message: `Le type ${type.name} est maintenant faible au type ${weaknessType.name}!`,
                });
            }
        catch(Error){
            switch(Error.message){
                case 'TYPE_NOT_FOUND':
                    res.status(404);
                    res.json({message: "type n'a pas été trouvé"});
                    break;
                case 'WEAKNESS_TYPE_NOT_FOUND':
                    res.status(404);
                    res.json({message: "type de la faiblesse n'a pas été trouvé"});
                    return;
                default:
                    res.status(500);
                    res.json({message: Error.message});
            }
        }
    },
    removeWeakness: async (req, res) => {
        try {
            
        const typeId = parseInt(req.params.typeId);
        const weaknessTypeId = parseInt(req.params.type2Id);
        
        const {type, weaknessType} = await typeService.removeWeakness(typeId, weaknessTypeId);

         res.status(200);
        res.json({
                message: `Le type ${type.name} n'est plus faible au type ${weaknessType.name}!`,
                });
            }
        catch(Error){
            switch(Error.message){
                case 'TYPE_NOT_FOUND':
                    res.status(404);
                    res.json({message: "type n'a pas été trouvé"});
                    break;
                case 'WEAKNESS_TYPE_NOT_FOUND':
                    res.status(404);
                    res.json({message: "type de la faiblesse n'a pas été trouvé"});
                    return;
                default:
                    res.status(500);
                    res.json({message: Error.message});
            }
        }
    }
}

export default typeController;