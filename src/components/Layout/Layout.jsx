import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
      <Suspense fallback={null}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
  );
};
