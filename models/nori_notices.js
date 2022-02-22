module.exports = (sequelize, DataTypes) => {
    return sequelize.define('nori_notices', {
        norice_num: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        norice_subject: { type: DataTypes.STRING(50), allowNull: false },
        norice_content: { type: DataTypes.STRING(500), allowNull: false },
        norice_date: { type: DataTypes.DATE, allowNull: false },
    }, {
        timestamps: false,
    });
}