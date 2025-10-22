import { DataTypes } from "sequelize";

export default function moveModel (sequelize) {
    const Move =sequelize.define (
        'move', 
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(12),
                allowNull: false
            }
        }, {}
    );

    return Move;
}