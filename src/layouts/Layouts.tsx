import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layouts() {
  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
