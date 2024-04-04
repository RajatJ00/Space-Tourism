import Navbar from "../Components/Navbar/navbar";
import TechnologyImg from "../Components/Pages_Details/Technology/technology_img";
import TechnologyInfo from "../Components/Pages_Details/Technology/technology_info";

function Technology() {
    return (
        <>
            <div className="relative">
                <div className="w-full fixed">
                    <img src="assets/technology/background-technology-desktop.jpg" className="w-full" alt="Technology"/>
                </div>
                <Navbar />
                <TechnologyInfo />
                <TechnologyImg />
            </div>
        </>
    );
}
export default Technology;