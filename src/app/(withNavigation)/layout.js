import Navbar from "./../components/navbar"

const NavLayout = ({ children }) => {
    return (
        <div className="w-full h-screen overflow-x-hidden overflow-y-scroll flex flex-row bg-[#001F3D] hiddenscroll">
            <Navbar />
            <div className="md:ml-[300px] w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default NavLayout