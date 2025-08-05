import Card from "@/app/components/card"
import Header from "@/app/components/header"

const Surat = ({ }) => {
    return (
        <div className="w-full px-9 flex flex-col gap-5">
            <Header name={"Surat"} />
            <div className="w-full flex flex-col gap-2">
                <Card title={"Surat Penugasan Sos. Ponorogo"} subtitle={"Surat Penugasan"} time={"12 Mei 2025"} author={"Surya"} />
            </div>
        </div>
    )
}

export default Surat