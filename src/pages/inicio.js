import { Component } from "react";
import styled from "styled-components";
import Slider from "../Componentes/Slideshow/Slideshow";

class Inicio extends Component {
  render() {
    return (
      <>
        <div className="title">
          <Banner></Banner>
          <BannerText>
            ¡¡Explora nuestro catalogo y encuentra increíbles ofertas!! solo por
            tiempo limitado
          </BannerText>
        </div>
        <br />
        <div style={{ width: `80%`, margin: `auto` }}>
          <h1>Te ofrecemos</h1>
        </div>
        <Slider />
      </>
    );
  }
}
const Banner = styled.div`
  background-color: red;
  height: 50vh;
  background: url("https://1.bp.blogspot.com/-l-EAnCNMZKU/XDY_8fTmUNI/AAAAAAAAcg0/oriifyCSxW85BxLhn4MpDyNXL_RQeWAPgCLcBGAs/s1600/sb_20190108_desktop_SALE_MAIN_newmds_01_1-0.gif")
    no-repeat center center/cover;
`;
const BannerText = styled.p`
  margin: auto;
  text-align: center;
`;

export default Inicio;
