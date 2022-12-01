import logo from "./logo.svg";
import AppHeader1 from "./Components/Header/app-header";
import { menuItems } from "./Components/Header/menuItems";
import "./Layout.css";
import DisplayTournaments from "./Tournaments/DisplayTournaments";
import TournamentTable from "./Components/TournamentUpdates";
import { Testimonial } from "./Components/slider/slider";
import { Footer } from "./Components/footer/footer";

function Homepage() {
  return (
    <>
      <div
        style={{
          // backgroundImage: "linear-gradient(180deg, #00dbff, #0000ffb3)",
          backgroundImage:
            "linear-gradient(rgb(20 12 81), rgb(191 26 26 / 70%))",
          // backgroundSize: "auto",
          // backgroundRepeat: "no-repeat",
          // backgroundImage: "url(/bg3.jpg)",
        }}
      >
        <AppHeader1 menuItems={menuItems} />
        <div className="carouseTournamentContainer">
          <div className="carouselItem">
            <DisplayTournaments />
          </div>
          <div className="TournamentUpdates">
            <TournamentTable />
          </div>
        </div>
        <div
          style={{
            fontSize: "25px",
            fontWeight: 50,
            textAlign: "center",
            border: "50px solid firebrick",
            width: "100%",
            // border: "2px solid red",
            // borderRadius: "6px",
            color: "white",
            marginTop: "20px",
          }}
        >
          <Testimonial />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
