import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMemo } from "react";

export default function Layouts() {
  const { pathname } = useLocation();
  const isProjectsPage = useMemo(() => pathname === "/projects", [pathname])

  return (
    <>
      <Header />

      <main className={`mx-auto flex ${isProjectsPage ? "max-w-[950px]" : "max-w-[700px]"} items-center justify-between gap-3 px-4 py-3 md:px-6`}>
        <div className="">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
