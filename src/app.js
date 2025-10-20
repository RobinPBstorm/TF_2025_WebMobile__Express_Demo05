import express from 'express';
import pokemonRouter from './routers/pokemon.router.js';
import db from './models/index.js';

const { PORT, NODE_ENV } = process.env;

const app = express();

db.sequelize.authenticate()
    .then(() => console.log('Connection DB: OK'))
    .catch((err) => console.error(`Connection DB: Error (${err})`));

    if (NODE_ENV !== 'production') {
        db.sequelize.sync(
            // force: true,
            // alter: true
        );
    }

app.use(express.json());

app.use('/api/pokemon', pokemonRouter);

app.listen(PORT,(err)=> {
    if (err) {
        console.error('Erreur lors du lancement du WebServer');
        console.error(err);
        process.exit();
    }

    console.log(`Le WebServer écoute sur le port : ${PORT} et est en mode :${NODE_ENV}`)
})