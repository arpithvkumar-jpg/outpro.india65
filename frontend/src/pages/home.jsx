import React from "react";
import Navbar from "../components/navbar.jsx";
import Heropage from "../components/heropage.jsx";
import About from "./about.jsx";
import Services from "./services.jsx";
import Footer from "../components/footer.jsx";
import TestimonialsWhite from "./clients.jsx";

function Home(){
    return(
        <div>
            <Navbar />
            <Heropage />
            <hr />
            <About />
            <hr />
            <Services />
            <hr />
            <TestimonialsWhite />
         
  

           
        </div>
    )
}
export default Home;