import React from "react";
import { Fade } from "react-slideshow-image";

import { NavLink } from "react-router-dom";
import Card from "../../elements/card/card";
import "./mujersIndex.css";


const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
};

const MujeresIndex = ({ titulo, img, categoria, descripcion }) => {
    const cat =categoria;
    console.log(cat)
  return (
    <>
      <div className="title">
        <div className="title-text">
          <h1>{titulo}</h1>
        </div>
        <div className={img}></div>
      </div>
     

      <div className="cardbox-contaniner-componet">
         { cat.map((item, index) => {
          return (
            <NavLink key={index} to={item.path} className="cat-link">
              <Card name={item.nombre} />
            </NavLink>
          );
        })}
        
      </div>
      <div className="container">
        <InfoMujeres descripcion={descripcion} />
      </div>
    </>
  );
};
const InfoMujeres = ({descripcion}) => {
  return (
    <>
      <div className="info-text">
        <h3>Encuentra ropa de tu estilo</h3>
        {descripcion}
      </div>
      <div className="info-slide">
        <Fade {...fadeProperties} style={{ height: "200px"}}>
          <div className="each-fade"
          style={{background: "url(https://img.freepik.com/vector-gratis/plantilla-banner-venta-horizontal_23-2148917183.jpg?size=626&ext=jpg&ga=GA1.2.1149860058.1620950400)   no-repeat center center/cover", height: "200px"
        }} 
          >
            <div className="image-container">
              {/* <img src="https://img.freepik.com/vector-gratis/plantilla-banner-venta-horizontal_23-2148917183.jpg?size=626&ext=jpg&ga=GA1.2.1149860058.1620950400"></img> */}
            </div>{" "}
            <div className="text-container" >
              <h2>Encuentra ofertas cada semana</h2>
              <p>Puedes ahorrar en tus compras</p>
            </div>
          </div>

          <div className="each-fade"  style={{background: "url(https://dam.vanidades.com/wp-content/uploads/2021/04/moda-tendencias-primavera-verano-2021-1-900x550.jpg)   no-repeat center center/cover", height: "200px"
        }} >
            <div className="image-container">
              {/* <img src="https://dam.vanidades.com/wp-content/uploads/2021/04/moda-tendencias-primavera-verano-2021-1-900x550.jpg"></img> */}
            </div>{" "}
            <div className="text-container">
              <h2>Gran variedad de prendas</h2>
              <p>No olvides preguntar por nuevos productos</p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};
export default MujeresIndex;
