import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigate = useNavigation();
  //console.log(navigate); //initially the state is (state: "idle") when we click on it goes idle to loading and then again to loading
  // and when the data is fetched it again goes to idle

  const isLaoding = navigate.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLaoding && <Loader />}
      <Header />

      <div className="overflow-scroll">
      <main className=" max-w-3xl mx-auto">
        <Outlet />
        {/* to render child rout content */}
      </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
