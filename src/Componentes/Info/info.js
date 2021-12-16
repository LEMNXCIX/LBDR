import React from "react";
import MapWithAMarker from "./map";
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import "./info.css";
import { Link } from "react-router-dom";

const InfoBox = () => {
  return (
    <>

      <div className="info-box-container">
        <div className="info-box">
          <h1>La Bajada Del Remate</h1>
          <p>
            El 11 de octubre del 2015, siendo su principal fundador el Sr.
            Agustín Loor Loor, crea esta pequeña microempresa, en el cantón El
            Carmen en la Provincia de Manabí. La empresa nace ante la necesidad
            de satisfacer a un conglomerado, iniciándose con lo que es prenda de
            camisetas para varones desde las tallas 0 hasta las XXXL, con el
            pasar de los días se fueron viendo otras necesidades de la
            clientela, se da paso a la ropa para damas, en vestidos, blusas,
            faldas, shores, pantalones, prendas de dormir, zapatillas, gorras,
            bermudas, brasieres, en otras variedades. A precios cómodos y al
            alcance de todos.
          </p>
          <h2>Misión</h2>
          <p>
            Ofrecer a nuestros clientes productos de calidad, a precios cómodos
            que cumplan con sus necesidades y exigencias, abarcando desde sus
            gustos de acuerdo a su estilo de ver y vivir la vida.
          </p>
          <h2>Visión</h2>
          <p>
            Ser una negocio líder y reconocido en la venta de todo tipo de ropa
            “La Bajada Del Remate”, lograr también poder abastecer el local,
            poder iniciar con ventas online, proporcionando cada día más un
            servicio de excelencia a nuestros clientes y que al mismo tiempo nos
            permitan competir con los mejores precios del mercado.
          </p>
        </div>

        <div className="map-box">
          <h2>Ubícanos</h2>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbVG4Cam_31k7bhHMJPMbbTgWXNXjhrrs&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>

        <div className="text-contacto-box">
          <h3>
            ¡¡Si deseas conocer más acerca de los productos que ofrecemos,
            llámanos o escríbenos!!
          </h3>
          <Link className="links">
            0987654321 <FaWhatsapp />
          </Link>

          <div className="social-media">
            <div className="links-contacto-box">
              <h3>O síguenos en nuestras redes sociales &gt;&gt;&gt;</h3>
              <h5>para que no te pierdas ofertas exclusivas</h5>
            </div>

            <div className="link-container">
              <Link>
                <FaFacebookSquare className="icon-link facebook" />
              </Link>
              <Link
                to={{ pathname: "https://www.instagram.com" }}
                target="_blank"
              >
                <FaInstagram className="icon-link instagram" />
              </Link>
            </div>
          </div>

          
          <div>
            <h4>Horario de atención:</h4>
            <p>Lunes a Domingo de 8am a 16pm</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoBox;
