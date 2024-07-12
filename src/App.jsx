import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/iniciar-sessao" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
