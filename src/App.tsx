import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layouts from "./layouts/Layouts";
import Error404 from "./common/Error404";

import ModalProjectDetail from "./components/Projects/ModalProjectDetail";
import ProjectsPage from "./components/Projects/ProjectsPage";

import ContactPage from "./pages/ContactPage";
import IndexPage from "./pages/IndexPage";
import Aboutme from "./pages/Aboutme";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<IndexPage />} index />
            <Route path="/projects/:id" element={<ModalProjectDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
