module.exports = (sequelize, DataTypes) => sequelize.define("Pegawai", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama: DataTypes.STRING,
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    nip: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    timestamps: true,
    tableName: 'pegawai'
});