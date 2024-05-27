import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <Route exact path="/" element={} /> */}
          {/* <Route exact path="/aboutme" element={} /> */}
          {/* <Route exact path="/projects" element={} /> */}
          {/* <Route exact path="/contact" element={} /> */}

          <Route  path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
