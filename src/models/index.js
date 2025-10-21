import { Sequelize } from "sequelize";
import pokemonModel from "./pokemon.model.js";
import typeModel from "./type.model.js";

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: true,
                trustServerCertificate: true,
                instanceName: process.env.DB_INSTANCENAME
            }
        }
    }
)

const db = {}

db.sequelize = sequelize;

db.Pokemon = pokemonModel(sequelize);
db.Type = typeModel(sequelize);

export default db;