import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import IndexPage from "./components/IndexPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<Layouts />}>
            <Route path="/" element={<IndexPage />} index />
            {/* <Route path="/aboutme" element={<IndexPage />} /> */}
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
