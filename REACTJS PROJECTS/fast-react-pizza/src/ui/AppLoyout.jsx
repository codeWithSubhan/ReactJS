import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/card/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLoyout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLoyout;