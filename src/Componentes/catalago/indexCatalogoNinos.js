import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../../elements/card/card";
import "./indexCatalago.css";
import CatalogoNinos from "./catalogoNinos.json";


const IndexCatalagoHombres =({titulo, img,categoria, catalogo})=>{
    var catalogos = CatalogoNinos.Vestidos;
  
    function ValidarCatalogo() {
      if (catalogo === "camisas") {
        catalogos = CatalogoNinos.Camisas;
      }
      if (catalogo === "blusas") {
        catalogos = CatalogoNinos.Blusas;
      }
      if (catalogo === "pantalones") {
        catalogos = CatalogoNinos.Pantalones;
      }
      if (catalogo === "ropainterior") {
        catalogos = CatalogoNinos.RopaInterior;
      }
      if (catalogo === "zapatos") {
        catalogos = CatalogoNinos.Zapatos;
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