import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {

<<<<<<< HEAD
    const activepage = "h-full border-b-[3px] cursor-pointer flex gap-3.5";
    const inactivepage = "h-full hover:border-b-[3px] cursor-pointer hover:border-white/[0.5] flex gap-3.5";
=======

    const activepage = "h-full border-b-4 cursor-pointer flex gap-3.5";
    const inactivepage = "h-full hover:border-b-4 cursor-pointer hover:border-white/[0.5] flex gap-3.5";
>>>>>>> 13d94187807d2d4dec800b097899e7f21933d276

    return (
        <nav className="w-full h-fit absolute top-10">
            <div className="w-full flex justify-between">
<<<<<<< HEAD
                <div className="ml-10 mt-4 animate-pulse">
                    <img src="assets/shared/logo.svg" alt="Shared" />
                </div>

                <div className="w-fit h-20 pt-6 px-52 gap-14 bg-white/[.04] font-barlow text-white text-main_heading backdrop-blur-2xl justify-center font-bold laptop:inline-flex tablet:inline-flex hidden ">
=======
                <div className=" ml-10 mt-4 animate-pulse">
                    <img src="assets/shared/logo.svg" alt="Shared" />
                </div>

                <div className="w-fit h-20 pt-6 px-52 gap-14 bg-white/[.04] font-barlow flex text-white text-main_heading backdrop-blur-2xl justify-center font-bold">
>>>>>>> 13d94187807d2d4dec800b097899e7f21933d276

                    <NavLink className={({ isActive }) => isActive ? activepage : inactivepage} to="/"><p>00</p><h1>HOME</h1>
                    </NavLink>

                    <NavLink className={({ isActive }) => isActive ? activepage : inactivepage} to="/destination"><p>01</p><h1>DESTINATION</h1>
                    </NavLink>

                    <NavLink className={({ isActive }) => isActive ? activepage : inactivepage} to="/crew"><p>02</p><h1>CREW</h1>
                    </NavLink>

                    <NavLink className={({ isActive }) => isActive ? activepage : inactivepage} to="/technology"><p>03</p><h1>TECHNOLOGY</h1>
                    </NavLink>
                </div>
            </div>
<<<<<<< HEAD
            <div className="absolute w-96 h-0.5 bg-[#383B4B] left-40 top-10 laptop:inline-flex tablet:inline-flex hidden "></div>
=======
            <div className="absolute w-96 h-0.5 bg-[#383B4B] left-40 top-10"></div>
>>>>>>> 13d94187807d2d4dec800b097899e7f21933d276
        </nav>
    );
}
export default Navbar;