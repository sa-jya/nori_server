module.exports = (sequelize, DataTypes) => {
    return sequelize.define('nori_members', {
        id: { type: DataTypes.STRING(20), allowNull: false, primaryKey: true },
        pw: { type: DataTypes.STRING(16), allowNull: false },
        business: { type: DataTypes.STRING(20), allowNull: false },
        ownernum: { type: DataTypes.INTEGER, allowNull: false },
        ownername: { type: DataTypes.STRING(16), allowNull: false },
        callnumber: { type: DataTypes.STRING(25), allowNull: false },
        adress: { type: DataTypes.STRING(30), allowNull: false },
    }, {
        timestamps: false,
    });
}