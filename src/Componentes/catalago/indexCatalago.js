import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../../elements/card/card";
import "./indexCatalago.css";
import CatalogoItems from "./catalogoItems.json";
import CatalogoHombre from "./catalogoHombre.json";
 const IndexCatalago = ({ titulo, img, categoria, catalogo }) => {
  const cat = categoria;
  var catalogos = CatalogoItems.Vestidos;

  function ValidarCatalogo() {
    if (catalogo === "vestidos") {
      catalogos = CatalogoItems.Vestidos;
    }
    if (catalogo === "blusas") {
      catalogos = CatalogoItems.Blusas;
    }
    if (catalogo === "pantalones") {
      catalogos = CatalogoItems.Pantalones;
    }
    if (catalogo === "ropainterior") {
      catalogos = CatalogoItems.RopaInterior;
    }
    if (catalogo === "zapatos") {
      catalogos = CatalogoItems.Zapatos;
    }
  }

  return (
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
};


export default IndexCatalago;