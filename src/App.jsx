import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  } from "react-router-dom";


import Contact from "./components/contact/Contact";
import Equipe from "./components/equipe/Equipe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Presentation from "./components/presentation/Presentation";
import Solutions from "./components/solutions/Solutions";
import Conseil from "./components/conseil/Conseil";
import Expertise from "./components/expertise/Expertise";
import Constat from "./components/constat/Constat";


const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Presentation />
      <Solutions />
      <Expertise />
      <Conseil />
      <Constat />
      <Equipe />
      <Contact />
      <Footer />
    </>

  )
}

export default App
