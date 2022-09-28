import React from 'react';


import Contact from "./components/contact/Contact";
import Equipe from "./components/equipe/Equipe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Presentation from "./components/presentation/Presentation";
import Solutions from "./components/solutions/Solutions";


const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Presentation />
      <Solutions />
      <Equipe />
      <Contact />
      <Footer />
    </>

  )
}

export default App
