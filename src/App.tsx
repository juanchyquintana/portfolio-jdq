import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import IndexPage from "./components/IndexPage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<Layouts />}>
            <Route path="/" element={<IndexPage />} index />
            <Route path="/projects" element={<ProjectsPage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
