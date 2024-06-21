import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import IndexPage from "./components/IndexPage";
import ProjectsPage from "./components/ProjectsPage";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<Layouts />}>
            <Route path="/" element={<IndexPage />} index />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/habilities" element={<Aboutme />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
