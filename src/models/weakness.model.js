import { DataTypes } from "sequelize";

export default function weaknessModel(sequelize){
    const Weakness = sequelize.define(
        'weakness', {
            // colonne supplémentaire
        },{
            timestamps: false, // n'ajoutera pas les colonnes 'createdAt' et 'modifiedAt'
        }
    );

    return Weakness;

};