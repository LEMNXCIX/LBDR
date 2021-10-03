import IndexCatalago from "../Componentes/catalago/indexCatalago";
import { CategoriasMujeres } from "../Componentes/Mujeres/Categorias";

const Catalogo = ({ catalogo }) => {
  return (
    <>
      <IndexCatalago
        titulo="Mujeres"
        img="img-catalogo"
        categoria={CategoriasMujeres}
        catalogo={catalogo}
      />
    </>
  );
};
export default Catalogo;
