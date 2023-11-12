import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./styles/App.css";
import Header from "./components/Header";
import Adventure from "./components/Adventure";
import Destinations from "./components/Destinations";
import Discount from "./components/Discount";
import Booknow1 from "./components/Booknow1";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App(){
  return(
    <>
    <Navbar />
    <Header />
    <Adventure />
    <Destinations />
    <Discount />
    <Booknow1 />
    <Testimonials />
    <Footer />

    </>
    
  );
}

export default App;