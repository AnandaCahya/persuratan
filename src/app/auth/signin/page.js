const Signin = () => {
    return (
        <div className="w-full font-sans items-center justify-items-center h-screen bg-[#001F3D]">
            <main className="w-full grid grid-cols-2 items-center justify-center h-screen gap-4">
                <div className="relative w-full flex flex-col items-center justify-center h-full">
                    <img className="w-full h-screen object-cover object-left-top" src="/assets/img/ocean_background.jpg"></img>
                    <span className=" w-2/5 h-full min-h-screen bg-gradient-to-l from-[#001F3D] to-[rgba(0,0,0,0)] absolute top-0 right-0"></span>
                </div>
                <div className="w-[w-full - w-10] flex flex-col items-center justify-center h-full bg-[#067593] py-10 rounded-l-3xl gap-10 ml-10">
                    <p className="w-9/12 text-center text-xl font-semibold border-b p-10 border-white">Masuk</p>
                    <form className="w-4/5 flex flex-col">
                        <label>NIP</label>
                        <input id="nip" placeholder="Masukkan Nomor induk anda" className="w-full px-12 py-3 bg-[#001F3D]" inputMode="numeric"></input>
                        <br />
                        <label>Kata sandi</label>
                        <input id="password" placeholder="Masukkan Kata sandi anda" className="w-full px-12 py-3 bg-[#001F3D]" type="password"></input>
                    </form>
                    <button className="rounded-md w-3/5 py-3 bg-[#055772] hover:bg-[#001F3D] transition-all duration-250">Masuk</button>
                </div>
            </main>
        </div>
    )
}

export default Signin