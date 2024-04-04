import CrewInfo from "../Components/Pages_Details/Crew/crew_info";
import Navbar from "../Components/Navbar/navbar";

function Crew() {
    return (
        <>
            <div className="relative">
                <div className="w-full fixed">
                    <img src="assets/crew/background-crew-desktop.jpg" className="w-full" alt="Crew"/>
                </div>
                <Navbar />
                <CrewInfo />
            </div>

        </>
    );
}
export default Crew;