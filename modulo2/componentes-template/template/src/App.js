import React from "react";
import Garagem from "./components/Garagem"
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
     <h1>Aula - Componentes React</h1>
     <Header/>
     <Garagem/>
     <Footer/>
    </div>
  );
}
