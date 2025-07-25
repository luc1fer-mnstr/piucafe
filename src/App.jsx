import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Login from "./pages/Login";
import Form from "./pages/Form";
import Table from "./pages/Table";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Admin Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
