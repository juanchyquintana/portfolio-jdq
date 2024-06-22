import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import IndexPage from "./components/IndexPage";
import ProjectsPage from "./components/ProjectsPage";
import Aboutme from "./components/Aboutme";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<IndexPage />} index />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
