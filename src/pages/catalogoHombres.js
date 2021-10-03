import IndexCatalagoHombres from "../Componentes/catalago/indexCatalogoHombres";
import { CategoriasHombres } from "../Componentes/Mujeres/Categorias";

const CatalogoHombres = ({ catalogo }) => {
  return (
    <>
      <IndexCatalagoHombres
        titulo="Hombres"
        img="img-catalogo-hombres"
        categoria={CategoriasHombres}
        catalogo={catalogo}
      />
    </>
  );
};
export default CatalogoHombres;
