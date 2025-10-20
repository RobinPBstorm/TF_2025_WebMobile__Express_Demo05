import { DataTypes } from "sequelize";

function pokemonModel (sequelize) {
    const Pokemon =sequelize.define (
        'pokemon', 
        // définition des colonnes et leurs contraintes
        {
            id: {
                type: DataTypes.BIGINT,
                // autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(12),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING('MAX'),
                allowNull: true
            },
            hp: {
                types: DataTypes.TINYINT,
                allowNull: false
            },
            attack: {
                types: DataTypes.TINYINT,
                allowNull: false
            },
            defense: {
                types: DataTypes.TINYINT,
                allowNull: false
            },
            attackSp: {
                types: DataTypes.TINYINT,
                allowNull: false
            },
            defenseSp: {
                types: DataTypes.TINYINT,
                allowNull: false
            },
            speed: {
                types: DataTypes.TINYINT,
                allowNull: false
            }
        },
        // option supplémentaire pour création de la table
        {
            timestamps: false,
            tableName: 'pokemon'
        }
    );

        return Pokemon;
    }

    export default pokemonModel;
}