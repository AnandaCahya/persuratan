module.exports = (sequelize, DataTypes) => sequelize.define("Surat", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    judul: DataTypes.STRING,
    nomor_surat: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    kelompok_surat: {
        type: DataTypes.ENUM("surat_masuk", "surat_keluar")
    },
    kategori_surat: {
        type: DataTypes.ENUM("wajib", "opsional", "lanjutan")
    },
    jenis_surat: {
        type: DataTypes.STRING
    },
    diterima_pada: {

    },
    dikirim_pada: {

    },
    status_surat: {
        type: DataTypes.ENUM("dikirim", "diterima", "disposisi", "draft", "arsip")
    },
    tanggal_status: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    timestamps: true,
    tableName: 'pegawai'
});