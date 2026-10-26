import { Routes, Route } from "react-router-dom";
import Acceuil from "./components/acceuil";
import Apropos from "./components/apropos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/a-propos" element={<Apropos />} />
    </Routes>
  );
}

export default App;