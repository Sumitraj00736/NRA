import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import HeroSlider from "./components/specific/HeroSlider.jsx";
import FeatureEvents from "./components/specific/FeatureEvents.jsx";
import OngoingEvents from "./components/specific/OngoingEvents.jsx";

function App() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <FeatureEvents />
      <OngoingEvents />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
