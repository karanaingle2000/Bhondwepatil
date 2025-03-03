import { Link,  Routes, Route } from "react-router";
import Admission from "./Pages/Admission";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Common/Header";
import { Acadmic } from "./Pages/Acadmic";
import { Achivement } from "./Pages/Achivement";
import { Infra } from "./Pages/Infra";
import { Gallery } from "./Pages/Gallery";
import { Contact } from "./Pages/Contact";
import Footer from "./Common/Footer";


function App() {
 
  return (
    <>
     {/* <a href="/">home</a>
    <a href="/About">About</a>
//     <a href="/Admission">Admission</a> */}
{/* // <div className="flex flex-col items-center">
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//        <Link to="/Admission">Admission</Link>
//        </div> */}
<Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Admission" element={<Admission />} />
      <Route path="/Acadmic" element={<Acadmic/>} />
      <Route path="/Achivement" element={<Achivement/>} />

      <Route path="/Infra" element={<Infra/>} />
      <Route path="/Gallary" element={<Gallery/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="Footer" element={<Footer/>} />



      </Routes>
      <Footer />
 



    </>
  )
}

export default App
