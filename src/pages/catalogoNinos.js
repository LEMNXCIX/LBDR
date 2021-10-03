import IndexCatalagoNinos from "../Componentes/catalago/indexCatalogoNinos";
import { CategoriasNinos } from "../Componentes/Mujeres/Categorias";

const CatalogoNinos = ({ catalogo }) => {
  return (
    <>
      <IndexCatalagoNinos
        titulo="Niños"
        img="img-catalogo-ninos"
        categoria={CategoriasNinos}
        catalogo={catalogo}
      />
    </>
  );
};
export default CatalogoNinos;
