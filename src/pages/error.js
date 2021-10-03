import styled from "styled-components";

const Error = () => {
  return (
    <ErrorContenedor>
      <ErrorTitulo>Error: 404</ErrorTitulo>
      <ErrorTitulo>
        <b>Página no encontrada</b>
      </ErrorTitulo>
      <p>La página a la que intentas acceder no existe.</p>
    </ErrorContenedor>
  );
};
const ErrorContenedor = styled.div`
  height: 80vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ErrorTitulo = styled.h1`
  font-weight: bolder;
  font-size: 5rem;

  @media (max-width: 960px) {
        font-size: 2rem};
      
`;

export default Error;
