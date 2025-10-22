import db from "../models/index.js";

const moveService = {
    getAll: async () => {
        const moves = await db.Move.findAll({
            include: [
                { model: db.Type }
            ]
        });
        return moves;
    },
    add: async (data) => {
        const moveCreated = await db.Move.create(data);

        return moveCreated;
    },
    remove: async(id) => {
        const nbRow = await db.Move.destroy(
            {
                where : { id : id }
            }
        );

        return nbRow === 1;
    }
};

export default moveService;