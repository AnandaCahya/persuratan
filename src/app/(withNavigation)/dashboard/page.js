import Card from "@/app/components/card"
import Header from "@/app/components/header"

const Dashboard = ({}) => {
    return (
        <div className="w-full px-9 flex flex-col gap-5">
            <Header name={"Dashboard"} />
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-5 gap-4 bg-[#454545]">
                    <a className="text-sm font-semibold">Jumlah Petugas</a>
                    <a className="text-5xl">27</a>
                </div>
                <div className="flex flex-col items-center p-5 gap-4 bg-[#454545]">
                    <a className="text-sm font-semibold">Jumlah Surat</a>
                    <a className="text-5xl">239</a>
                </div>
            </div>
            <div className="flex flex-col gap-2 xl:h-7/12 lg:h-6/12 md:h-5/12">
                <a>Riwayat Pembuatan Surat</a>
                <div className="w-full flex flex-col md:overflow-y-scroll md:overflow-x-hidden gap-2 md:customscroll">
                    <Card title={"Surat Penugasan Sos. Ponorogo"} subtitle={"Surat Penugasan"} time={"12 Mei 2025"} author={"Surya"}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard