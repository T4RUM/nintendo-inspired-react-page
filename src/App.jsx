import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CustomNavbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Assistance from "./pages/Assistance";



function App() {
  return (
    <HashRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciar-sessao" element={<Login />} />
        <Route path="/criar-conta" element={<Register />} />
        <Route path="/assistencia" element={<Assistance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
