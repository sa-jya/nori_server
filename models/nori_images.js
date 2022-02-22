module.exports = (sequelize, DataTypes) => {
    return sequelize.define('nori_images', {
        id: { type: DataTypes.STRING(20), allowNull: false },
        nori_img: { type: DataTypes.STRING(50), allowNull: false },
    }, {
        timestamps: false,
    });
}