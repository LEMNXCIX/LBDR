import React from "react";
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-item">
          <h3>Ubícanos</h3>
          <p>En el centro comercial de El Carmen</p>
          
          <h4>Horario de atención:</h4>
            <p>Lunes a Domingo de 8am a 16pm</p>
          <div>
          
          </div>
        </div>{" "}
        <div className="copy"> La Bajada del Remate | 2021 ©</div>{" "}
        <div className="footer-item">
          {" "} <div className="media">
          <div>
            <h3>Contáctanos</h3>
          </div>
         <div className="social-media">
            <Link className="links">
              0987654321 <FaWhatsapp />
            </Link>{" "}
            
              <Link>
                <FaFacebookSquare className="icon-link-footer  facebook" />
              </Link>
              <Link
                to={{ pathname: "https://www.instagram.com" }}
                target="_blank"
              >
                <FaInstagram className="icon-link-footer instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
