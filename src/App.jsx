import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CustomNavbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/iniciar-sessao" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
