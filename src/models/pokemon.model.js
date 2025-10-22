import { DataTypes } from "sequelize";

export default function pokemonModel (sequelize) {
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
                type: DataTypes.TINYINT,
                allowNull: false
            },
            attack: {
                type: DataTypes.TINYINT,
                allowNull: false
            },
            defense: {
                type: DataTypes.TINYINT,
                allowNull: false
            },
            attackSp: {
                type: DataTypes.TINYINT,
                allowNull: false
            },
            defenseSp: {
                type: DataTypes.TINYINT,
                allowNull: false
            },
            speed: {
                type: DataTypes.TINYINT,
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
};