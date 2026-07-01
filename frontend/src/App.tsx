import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Evenements from "./pages/Evenements";
import Billetterie from "./pages/Billetterie";
import Contact from "./pages/Contact";
import Restauration from "./pages/Restauration";
import Boutique from "./pages/Boutique";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const noFooterRoutes = ["/connect", "/admin"];

function Layout() {
  const location = useLocation();
  const hideFooter = noFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/billetterie" element={<Billetterie />} />
          <Route path="/restauration" element={<Restauration />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
