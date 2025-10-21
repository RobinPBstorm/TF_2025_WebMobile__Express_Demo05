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
}

export default typeService;