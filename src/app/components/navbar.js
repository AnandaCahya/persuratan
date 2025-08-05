import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-[300px] h-full grid grid-rows-3 p-10 rounded-r-3xl bg-[#303030] fixed">
            <div className="flex flex-col justify-center">
                <p className="font-semibold text-sm">SiPerDu</p>
                <p className="text-xl">Ananda Eka Cahyaning Pribadi</p>
                <p>20 Orang sedang aktif</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <Link className="w-full bg-[#454545] text-lg py-3 px-2" href={"/dashboard"}>Dasbor</Link>
                <Link className="w-full bg-[#454545] text-lg py-3 px-2" href={"/pegawai"}>Pegawai</Link>
                <Link className="w-full bg-[#454545] text-lg py-3 px-2" href={"/surat"}>Surat</Link>
            </div>
            <div className="flex flex-col justify-center">
                <button className="hover:bg-[#454545] py-3 px-2 transition-all duration-150">Keluar</button>
            </div>
        </div>
    )
}

export default Navbar