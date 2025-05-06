import { NavLink, Outlet } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <div className="w-full h-[50px] bg-black text-white flex justify-between px-10 text-xl items-center">
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                <ul className="hidden md:flex space-x-6">
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/data'><li>Getdata</li></NavLink>
                    <NavLink to='/services'><li>Services</li></NavLink>
                </ul>
                </div>
                <div className=" md:flex space-x-5">

                    <NavLink to='/login'><button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white text-black rounded-xl cursor-pointer ">Login</button></NavLink>
                    <NavLink to='/signup'><button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white text-black rounded-xl cursor-pointer">Sign up</button></NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Navbar