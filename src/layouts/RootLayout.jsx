import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import { MainContainer } from "../components/layout";
import Loader from "../components/UI/Loader/Loader";
import MenuBurger from "../components/Header/MenuBurger";

function RootLayout() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <MenuBurger />
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </div>
  );
}

export default RootLayout;
