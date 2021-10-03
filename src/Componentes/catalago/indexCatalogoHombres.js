import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../../elements/card/card";
import "./indexCatalago.css";
import CatalogoHombre from "./catalogoHombre.json";


const IndexCatalagoHombres =({titulo, img,categoria, catalogo})=>{
    var catalogos = CatalogoHombre.Vestidos;
  
    function ValidarCatalogo() {
      if (catalogo === "camisas") {
        catalogos = CatalogoHombre.Camisas;
      }
     
      if (catalogo === "pantalones") {
        catalogos = CatalogoHombre.Pantalones;
      }
      if (catalogo === "ropainterior") {
        catalogos = CatalogoHombre.RopaInterior;
      }
      if (catalogo === "zapatos") {
        catalogos = CatalogoHombre.Zapatos;
      }
    }
    const cat = categoria;
    return(
      <>
        {ValidarCatalogo()}
       <div className="title">
          <div className="title-text">
            <h1>{titulo}</h1>
          </div>
          <div className={img}></div>
        </div>
        <div className="cardbox-contaniner-componet">
          {cat.map((item, index) => {
            return (
              <NavLink key={index} to={item.path} className="cat-link">
                <Card name={item.nombre} />
              </NavLink>
            );
          })}
        </div>
  
       <div className="container">
          {catalogos.map((vestido) => {
            return (
              <>
                <h1>{vestido.titulo}</h1>
                <div className="catalogo-box">
                  {vestido.prenda.map((prenda) => {
                    return (
                      <NavLink to="#" className="cat-link">
                        <Card
                          name={prenda.nombre}
                          url={prenda.url}
                          precio={prenda.precio}
                        />
                      </NavLink>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
  export default IndexCatalagoHombres;