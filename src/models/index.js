import { Sequelize } from "sequelize";
import pokemonModel from "./pokemon.model.js";
import typeModel from "./type.model.js";
import weaknessModel from "./weakness.model.js";

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
db.Weakness = weaknessModel(sequelize);

// Ajout des relations
// One TO MANY
// relation one => belongsTo
db.Pokemon.belongsTo(db.Type,{
    foreignKey: {
        name:"type1Id",
        allowNull: false
    },
    as: "type1",
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
});
// relation many => hasMany
db.Type.hasMany(db.Pokemon, {
    foreignKey: "type1Id",
});

db.Pokemon.belongsTo(db.Type,{
    foreignKey: {
        name:"type2Id",
        allowNull: true
    },
    as: "type2",
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
});
db.Type.hasMany(db.Pokemon, {
    foreignKey: "type2Id",
});

// Many to Many
// Entity1.belongsToMany(Entity2, {through: TableIntermediaire});
// Entity2.belongsToMany(Entity1, {through: TableIntermediaire});

// ici cas, particulier : la table en many to many avec elle même
db.Type.belongsToMany(db.Type, { 
    as: "weaknesses",
    through: db.Weakness,
    foreignKey: 'typeId',
    otherKey: 'weakAgainstId',
});

export default db;