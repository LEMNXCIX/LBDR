import { Component } from "react";
import MujeresIndex from "../Componentes/Mujeres/mujeresIndex";
import { CategoriasHombres } from "../Componentes/Mujeres/Categorias";

class Hombres extends Component {
  render() {
    return (
      <>
        <MujeresIndex
          titulo="Hombres"
          img="img-hombres"
          categoria={CategoriasHombres}
          descripcion="Realiza tus compras online y descubre todos los modelos de camisas, camisetas deportivas y chaquetas para hombre que no pueden faltar en tu armario. Encuentra el fit perfecto para ti dentro de nuestra selección de jeans en diversos diseños y colores, además de pantalones de tela para la oficina, y prendas básicas para un look moderno. "
        />
      </>
    );
  }
}
export default Hombres;
