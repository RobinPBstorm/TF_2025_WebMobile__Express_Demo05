import { DataTypes } from "sequelize";

export default function typeModel (sequelize) {
    const Type =sequelize.define (
        'type', 
        // définition des colonnes et leurs contraintes
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(12),
                allowNull: false
            },
            image: {
                type: DataTypes.STRING('MAX'),
                allowNull: true
            },
        },
        {
            timestamps: false,
            tableName: 'type'
        }
    );

        return Type;
    };