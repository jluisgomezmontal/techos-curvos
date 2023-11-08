import { Contactanos } from "./components/Contactanos";
import { NavBar } from "./components/NavBar";
import ArcoTechos from "./assets/imgs/arcotechos.jpg";
import { Bienvenida } from "./components/Bienvenida";
import { Beneficios } from "./components/Beneficios";
import { Servicios } from "./components/Servicios";
import { Cards } from "./components/Cards";
import Testimonios from "./components/Testimonios";

export const TechosCurvos = () => {
  return (
    <div className="app">
      <Contactanos />
      <NavBar />
      <img className="arcoTechos" src={ArcoTechos} alt="Imagen de Arcotechos" />
      <div className="container">
        <Bienvenida />
        <br />
        <br />
        <Servicios />
        <Beneficios />
        <Cards />
        <Testimonios />
      </div>
    </div>
  );
};
