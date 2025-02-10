import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";
import Button from "./components/button/Button";
import { Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Navlinks from "./components/Navlinks/Navlinks";
function App() {
  const [state, setstate] = useState("app");
  const handlebuttonclick = () => {
    setstate("button clicked");
  };
  return (
    <div className="App">
      

      
      <Navlinks/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contact/>} />
        </Routes>
      
    </div>
  );
}

export default App;
