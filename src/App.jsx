import { Routes, Route } from "react-router-dom";
import Acceuil from "./components/acceuil";
import Apropos from "./components/apropos";
import Contact from "./components/contact";
import Inscription from "./components/inscription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/a-propos" element={<Apropos />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Inscription />} />
    </Routes>
  );
}

export default App;