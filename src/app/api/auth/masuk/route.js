import { generate } from "@utils/JsonWebToken";
import { NextResponse } from "next/server";

import { Models } from "@models/index"



export async function POST(req) {
    const { nip, password } = await req.json();


    try {

        const admin = await Models.Pegawai.findOne({
            where: { admin: true, nip },
        });

        if (!admin) {
            return NextResponse.json(
                {
                    message:
                        "Anda tidak memiliki akses / Akun anda tidak ditemukan",
                },
                { status: 401 },
            );
        }

        const verify = await Models.Pegawai.findOne({
            where: { admin: true, nip, password },
        });

        if (!verify) {
            return NextResponse.json(
                {
                    message:
                        "NIP atau Password anda salah. Silahkan di ingat ingat kembali",
                },
                { status: 401 },
            );
        }


        const token = generate(verify.id);
        return NextResponse.json(
            {
                token: token,
                nip: admin.nip,
                nama: admin.nama,
                timkerja: admin.timkerja,
                jabatan: admin.jabatan,
                message: `Selamat datang ${admin.nama}`,
            },
            { status: 200 },
        );
    } catch (error) {
        console.error("Authentication error:", error);
        return NextResponse.json(
            {
                message: "Terjadi kesalahan pada server",
            },
            { status: 500 },
        );
    }
}