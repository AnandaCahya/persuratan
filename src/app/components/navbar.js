import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-[300px] h-full grid grid-rows-3 p-10 rounded-r-3xl bg-[#067593] fixed">
            <div className="flex flex-col justify-center">
                <p className="font-semibold text-xs">SiPerDu</p>
                <p className="text-lg">Ananda Eka Cahyaning Pribadi</p>
                <p className="text-sm">20 Orang sedang aktif</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <Link className="w-full bg-[#055772] py-3 px-4" href={"/dashboard"}>Dasbor</Link>
                <Link className="w-full bg-[#055772] py-3 px-4" href={"/pegawai"}>Pegawai</Link>
                <Link className="w-full bg-[#055772] py-3 px-4" href={"/surat"}>Surat</Link>
            </div>
            <div className="flex flex-col justify-center">
                <button className="hover:bg-[#001F3D] py-3 px-2 transition-all duration-150">Keluar</button>
            </div>
        </div>
    )
}

export default Navbar