import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Notes from "./Notes";
import Create from "./Create";
import Edit from "./Edit";

function App() {
  return (
    <>
      <div className="d-flex flex-row body">
        <BrowserRouter>
          <Sidebar />
          <div className=" container-fluid content">
            <Create />
            <Routes>
              <Route path="notes" element={<Notes />} />
              <Route path="edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
