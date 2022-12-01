import logo from './logo.svg';
import AppHeader1 from "./Components/Header/app-header";
import { menuItems } from "./Components/Header/menuItems";
import "./Layout.css";
import DisplayTournaments from "./Tournaments/DisplayTournaments";
import TournamentTable from "./Components/TournamentUpdates";
import { Testimonial } from "./Components/slider/slider";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./Components/Login&Register/Redux/Storeindex";
import RouteIndex from "./Routes/RouteIndex";

function App() {
  return (
    <Provider store={store}>
      <RouteIndex />
    </Provider>
  );
}

export default App;
