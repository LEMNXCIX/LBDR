import { Component } from "react";
import MujeresIndex from "../Componentes/Mujeres/mujeresIndex";
import { CategoriasMujeres } from "../Componentes/Mujeres/Categorias";

class Mujeres extends Component {
  render() {
    return (
      <>
        <MujeresIndex
          titulo="Mujeres"
          img="img"
          categoria={CategoriasMujeres}
          descripcion="Encuentra las últimas tendencias en moda femenina y descubre infinitas posibilidades para crear tus outfits. En esta sección podrás hallar desde vestidos cortos para el día, hasta vestidos de fiesta para un look impactante. Conoce todos nuestros modelos de jeans en sus distintos fits, estilos y colores, además de pantalones de tela que podrás usar en la oficina. Blusas de moda con estampados y diseños que se robarán todas las miradas, faldas largas y distintos modelos de chaquetas son las opciones indicadas para el fin de semana."
        />
      </>
    );
  }
}
export default Mujeres;
