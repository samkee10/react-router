import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";


const App = () => {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route path="/home"element={<HomePage />}/>
          <Route path="/contacto" element={<Contacto />}/>
        </Routes>
    </div>
);
};
export default App;