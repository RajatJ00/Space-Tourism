import DestinationInfo from "../Components/Pages_Details/Destination/destination_info";
import Navbar from "../Components/Navbar/navbar";

function Destination() {
    return (
        <>
            <div className="relative">
                <div className="w-full fixed">
                    <img src="assets/destination/background-destination-desktop.jpg" className="w-full" alt="Destination"/>
                </div>
                <Navbar />
                <DestinationInfo />
            </div>
        </>
    );
}
export default Destination;