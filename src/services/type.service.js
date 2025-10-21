import { Op } from "sequelize";
import db from "../models/index.js";

const typeService = {
    getAll: async () => {
        return await db.Type.findAll();
    },
    getById: async (id) => {
        const type = await db.Type.findOne({
            where: { id: id }
        });
        return type;
    },
    add: async (data) => {
        const type = data;

        const newType = await db.Type.create(type);
        return newType;
    },
    update: async (id, data) => {
        const oldType = await typeService.getById(id);

        if (!oldType) {
            throw new Error('TYPE_NOT_FOUND');
        }

        const nbRow = await db.Type.update(data, {
            where : {id : id},
            returning: true
        });

        if (nbRow[0] === 1) {
            return typeService.getById(id);
        }
        return null;
    },
    delete: async (id) => {
        const nbRowDeleted = await db.Type.destroy({
            where: {id: id}
        });

        return nbRowDeleted === 1;
    },
    getPokemonByType: async (typeId) => {
        const pokemons = await db.Pokemon.findAll({ 
                where: {
                    [Op.or] : {
                        type1Id : typeId,
                        type2Id : typeId
                    }
                }
        });

        return pokemons;
    },
    addWeakness: async (typeId, weaknessTypeId) => {
        
        const type = await typeService.getById(typeId);

        const weaknessType = await typeService.getById(weaknessTypeId);

        if (!type) {
            throw new Error('TYPE_NOT_FOUND')
        }
        if (!weaknessType) {
            throw new Error('WEAKNESS_TYPE_NOT_FOUND')
        }
        
        // Cette méthode a été généré par la relation many to many
        // le nom vient aussi de la alias qu'on donné dans la relation
        await type.addWeaknesses(weaknessType);

        return { type, weaknessType };
    },
    removeWeakness: async (typeId, weaknessTypeId) => {
        
        const type = await typeService.getById(typeId);

        const weaknessType = await typeService.getById(weaknessTypeId);

        if (!type) {
            throw new Error('TYPE_NOT_FOUND')
        }
        if (!weaknessType) {
            throw new Error('WEAKNESS_TYPE_NOT_FOUND')
        }
        
        // Cette méthode a été généré par la relation many to many
        // le nom vient aussi de la alias qu'on donné dans la relation
        await type.removeWeaknesses(weaknessType);

        return { type, weaknessType };
    },
    getWeakness: async (typeId) => {
        const weaknesses = await db.Type.findOne({
            where: { id: typeId },
            include: [{
                model: db.Type,
                // l'alias défini dans la relation many to many
                as: 'weaknesses',
                // Pour éviter d'avoir les champs depuis les types référencés
                through: { attributes: [] }
            }]
        });
        return weaknesses;
    }
}

export default typeService;