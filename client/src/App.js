import Main from "./components/main/Main";
import Pet from "./components/pets/Pet";
import Admin from "./components/admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/pets/:petId" element={<Pet />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
