import React from "react";
import { Fade } from "react-slideshow-image";
import "./Slideshow.css";
import img1 from "./../../img/1.jpg";
import img2 from "./../../img/2.jpg";
import img3 from "./../../img/3.jpg";
import img4 from "./../../img/4.jpg";
const fadeImages = [img1, img2, img3, img4];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
};

const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div
          className="image-container"
          style={{
            background:
              "url(https://static.highsnobiety.com/thumbor/8uQ9HZ_XpAo-rQErI9vvUVCcp6s=/1600x1067/static.highsnobiety.com/wp-content/uploads/2021/04/16162418/how-to-care-for-clothes-02.jpg) no-repeat center center/cover",
            height: "500px",
          }}
        ></div>
        <div className="text-container">
          <h2>Gran variedad de ropa</h2>
          <p>Disponemos de un gran catalogo de prendas, para que formes tus mejores outfits</p>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container" 
         style={{
          background:
            "url(https://previews.123rf.com/images/stillab/stillab1709/stillab170900003/86050257-fashionable-concept-men-s-clothes-with-accessories-items-on-white-wooden-board-background.jpg) no-repeat center center/cover",
          height: "500px",
        }}>
        
        </div>
        <div className="text-container">
          {" "}
          <h2>Prendas nuevas de temporada</h2>
          <p>Revisa regularmente nuestro sitio para que encuentres ropa a tu gusto con increíbles precios</p>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container"
         style={{
          background:
            "url(https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80) no-repeat center center/cover",
          height: "500px",
        }}
        >
        
        </div>
        <div className="text-container">
          <h2>Diferentes estilos</h2>
          <p>Consigue tu ropa favorita a precios especiales</p>
        </div>
      </div>
    </Fade>
  );
};
export default Slideshow;
