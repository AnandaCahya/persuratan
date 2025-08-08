'use strict';

import _pegawai from './Pegawai';
import _surat from "./"

function init(sequelize, DataTypes) {
    const jabatan = _jabatan(sequelize, DataTypes);
    const kegiatan = _kegiatan(sequelize, DataTypes);
    const pegawai = _pegawai(sequelize, DataTypes);
    const timkerja = _timkerja(sequelize, DataTypes);
    const logarsip = _logarsip(sequelize, DataTypes)

    const pegawaikegiatan = _pegawaikegiatan(sequelize, DataTypes);

    pegawai.belongsToMany(kegiatan, {
        through: pegawaikegiatan,
        foreignKey: 'id_pegawai',
        otherKey: "id_kegiatan",
        as: "kegiatan",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    kegiatan.belongsToMany(pegawai, {
        through: pegawaikegiatan,
        foreignKey: 'id_kegiatan',
        otherKey: "id_pegawai",
        as: "partisipan",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    pegawai.belongsTo(jabatan, { foreignKey: "id_jabatan", as: "jabatan" });
    jabatan.hasMany(pegawai, {
        foreignKey: 'id_jabatan',
        as: 'pegawai'
    });

    pegawai.belongsTo(timkerja, { foreignKey: "id_timkerja", as: "timkerja" });
    timkerja.hasMany(pegawai, {
        foreignKey: 'id_timkerja',
        as: 'pegawai'
    });

    logarsip.belongsTo(pegawai, {
        foreignKey: 'pegawai_admin', // Menghubungkan pegawai_admin ke Pegawai.id
        as: 'admin_arsip',          // Nama alias untuk akses relasi
    });

    return {
        Jabatan: jabatan,
        Kegiatan: kegiatan,
        Pegawai: pegawai,
        Timkerja: timkerja,
        PegawaiKegiatan: pegawaikegiatan,
        Logarsip: logarsip
    };
}

module.exports = init;
module.exports.init = init;
module.exports.default = init;