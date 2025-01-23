import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import HeroSlider from "./components/specific/HeroSlider.jsx";

function App() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
