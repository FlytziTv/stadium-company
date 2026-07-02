import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Evenements from "./pages/Evenements";
import Billetterie from "./pages/Billetterie";
import Contact from "./pages/Contact";
import Restauration from "./pages/Restauration";
import Boutique from "./pages/Boutique";
import About from "./pages/About";
import Connect from "./pages/Connect";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/billetterie" element={<Billetterie />} />
          <Route path="/restauration" element={<Restauration />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/connect" element={<Connect />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
