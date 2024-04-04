import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full h-fit absolute top-10">
            <div className="w-full flex justify-between">
                <div className=" ml-10 mt-4">
                    <img src="assets/shared/logo.svg" alt="Shared" />
                </div>

                <div className="w-fit h-20 pt-6 px-52 gap-14 bg-white/[.04] font-barlow flex text-white text-main_heading backdrop-blur-2xl justify-center">

                    <div className="h-full border-b-4 hover:border-b-4 cursor-pointer hover:border-white/[0.5] flex gap-2.5 ">
                        <Link to="/" className="flex"><p className="w-fit font-bold">00</p><h1 className="ml-2">HOME</h1>
                        </Link>
                    </div>

                    <div className="hover:border-b-4 cursor-pointer hover:border-white/[0.5] flex gap-2.5">
                        <Link to="/destination" className="flex"><p className="font-bold">01</p><h1 className="ml-2">DESTINATION</h1>
                        </Link>
                    </div>

                    <div className="hover:border-b-4 cursor-pointer hover:border-white/[0.5] flex gap-2.5">
                        <Link to="/crew" className="flex"><p className="font-bold">02</p><h1 className="ml-2">CREW</h1>
                        </Link>
                    </div>

                    <div className="hover:border-b-4 cursor-pointer hover:border-white/[0.5] flex gap-2.5">
                        <Link to="/technology" className="flex"><p className="font-bold">03</p><h1 className="ml-2">TECHNOLOGY</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute w-96 h-0.5 bg-[#383B4B] left-48 top-10"></div>
        </nav>
    );
}
export default Navbar;