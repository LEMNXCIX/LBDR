import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./pages/error"
import Inicio from "./pages/inicio";
import Ofertas from "./pages/ofertas.js";
import Contacto from "./pages/contacto.js";
import Mujeres from "./pages/mujeres";
import Hombres from "./pages/hombres";
import Ninos from "./pages/ninos";
import Catalogo from "./pages/catalogo";
import CatalogoHombres from "./pages/catalogoHombres";
import CatalogoNinos from "./pages/catalogoNinos";
import Footer from "./Componentes/footer/footer";
import BarraNavegacion from "./Componentes/NavBar/NavBar";
class Router extends Component {
  render() {
    return (
      <>
      <BrowserRouter >
      <BarraNavegacion/>
        <Switch>
          <Route exact path="/" component={Inicio} />
          
          <Route exact path="/ofertas" component={Ofertas} />
          <Route exact path="/informacion" component={Contacto} />
          <Route exact path="/mujeres" component={Mujeres}/>
          <Route exact path="/hombres" component={Hombres}/>
          <Route exact path="/ninos" component={Ninos}/>
          {/* <Route exact path="/mujeres/:catalogo" component={Catalogo}/> */}
          <Route exact path="/mujeres/:catalogo" render ={
            
            (props)=>{
              var catalogo = props.match.params.catalogo;
              return(
                 <Catalogo catalogo={catalogo}/>
              )
             
            }
          }/>
          <Route exact path="/hombres/:catalogo" render ={
            (props)=>{
              var catalogo = props.match.params.catalogo;
              return(
                <CatalogoHombres catalogo={catalogo}/>
              )
            }
          }/>
            <Route exact path="/ninos/:catalogo" render ={
            (props)=>{
              var catalogo = props.match.params.catalogo;
              return(
                <CatalogoNinos catalogo={catalogo}/>
              )
            }
          }/>
          <Route  component={Error} />
        </Switch>
        <Footer/> 
      </BrowserRouter>
    
      </>
    );
  }
}
export default Router;
