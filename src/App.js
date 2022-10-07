import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services"
import Products from "./pages/Products"
import Signup from "./pages/Signup"
import Notfound from "./pages/Notfound"
function App() {
  return (
    <BrowserRouter >
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
