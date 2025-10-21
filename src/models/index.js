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
    foreignKey: "type1Id",
    as: "type1"
    }
);
// relation many => hasMany
db.Type.hasMany(db.Pokemon, {
    foreignKey: { 
        name: "type1Id",
        allowNull: false
    },
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
});
db.Pokemon.belongsTo(db.Type,{
    foreignKey: "type2Id",
    as: "type2"
    }
);
db.Type.hasMany(db.Pokemon, {
    foreignKey: { 
        name: "type2Id",
        allowNull: true
    },
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
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