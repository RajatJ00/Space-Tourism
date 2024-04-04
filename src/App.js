import Explore from "./Components/Pages_Details/Home/explore";
import HomeInfo from "./Components/Pages_Details/Home/home_info";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <>
      <div className="relative">
        <div className="w-full fixed">
          <img src="assets/home/background-home-desktop.jpg" className="w-full" alt="Home" />
        </div>
        <Navbar />
        <HomeInfo />
        <Explore />
      </div>
    </>
  );
}
export default App;
