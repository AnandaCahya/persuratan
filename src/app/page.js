import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full font-sans items-center justify-items-center min-h-screen bg-gradient-to-b from-[#202020] to-[#454545]">
      <main className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-full flex flex-col items-center justify-center">
          <a>Sistem Persuratan Terpadu</a>
          <a className="font-semibold text-2xl">Dinas Kelautan dan Perikanan</a>
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <button className="rounded-md px-15 py-3 bg-[#454545] hover:bg-[#555555] transition-all duration-250">Masuk</button>
        </div>
      </main>
    </div>
  );
}
