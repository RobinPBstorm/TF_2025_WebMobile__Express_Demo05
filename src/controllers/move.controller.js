import moveService from "../services/move.service.js";

const moveController = {
    getAll: async (req, res) => {
        const moves = await moveService.getAll();

        res.status(200);
        res.json(moves);
    },
    add: async (req,res) => {
        const data = req.body;
        const moveAdded = await moveService.add(data);

        res.status(201);
        res.location('/api/move/'+moveAdded.id);
        res.json(moveAdded);
    },
    delete: async (req,res) => {
        const id = parseInt(req.params.moveId);
        const isDeleted = await moveService.remove(id);

        if (isDeleted){
            res.sendStatus(204);
        }
        else {
            res.status(404);
            res.json({message: "la suppression s'est mal passée..."});
        }
    }
};

export default moveController;