import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import FirstStatment from "./components/powerStatements/FirstStatement";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FirstStatment />
      <Services />
      <Testimonials />
      <Footer />
    </>  
  );
}

export default App;
