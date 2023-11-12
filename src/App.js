import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import {Route, Routes} from "react-router-dom"
function App() {
   return (
   <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/services" element={<Services />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
    </div>
   </>
  )
}

export default App;
