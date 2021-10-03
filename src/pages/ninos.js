import { Component } from "react";
import MujeresIndex from "../Componentes/Mujeres/mujeresIndex";
import { CategoriasNinos } from "../Componentes/Mujeres/Categorias";

class Ninos extends Component {
  render() {
    return (
      <>
        <MujeresIndex
          titulo="Niños"
          img="img-ninos"
          categoria={CategoriasNinos}
          descripcion="Encuentra todo lo que necesitas en ropa para bebés, niñas y niños en diversos diseños y talles de sus personajes favoritos y estilos modernos para iniciar sus días de diversión con el mejor look. Escoge los mejores modelos dentro de nuestra selección de blusas, camisetas, ropa de playa, pijamas, conjuntos ¡y mucho más! "
        />
      </>
    );
  }
}
export default Ninos;
