import { BrowserRouter , Routes , Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/navbar.jsx";

const Home = lazy(() => import("./pages/home.jsx"));
const Services = lazy(() => import("./pages/services.jsx"));
const About = lazy(() => import("./pages/about.jsx"));
const Portfolio = lazy(() => import("./pages/portfolio.jsx"));
const EventMarketing = lazy(() => import("./servicedetails/EventMarketing.jsx"));
const CorporateEvent = lazy(() => import("./servicedetails/CorporateEvent.jsx"));
const EventPlanning = lazy(() => import("./servicedetails/EventPlanning.jsx"));
const SocialMedia = lazy(() => import("./servicedetails/SocialMedia.jsx"));
const TechnicalSupport = lazy(() => import("./servicedetails/TechnicalSupport.jsx"));
const Testimonials = lazy(() => import("./pages/clients.jsx"));
const Footer = lazy(() => import("./components/footer.jsx"));
const CallButton = lazy(() => import("./components/contacticon.jsx"));
const NotFound = lazy(() => import("./pages/notfound.jsx"));

function App(){
    return(
        <>
         <BrowserRouter>
        <Navbar />
            <Suspense fallback={<div className="min-h-screen grid place-items-center text-gray-600">Loading...</div>}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/event-marketing" element={<EventMarketing />} />
                  <Route path="/corporate-event" element={<CorporateEvent />} />
                  <Route path="/event-planning" element={<EventPlanning />} />
                  <Route path="/social-media" element={<SocialMedia />} />
                  <Route path="/technical-support" element={<TechnicalSupport />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/clients" element={<Testimonials />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="*" element={<NotFound />} />
              </Routes>
              <CallButton />
              <Footer />
            </Suspense>
        </BrowserRouter>
        </>
       
    )
}
export default App;