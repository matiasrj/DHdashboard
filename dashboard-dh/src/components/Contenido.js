import React from 'react'

import { Route, Switch} from 'react-router-dom'
import DashboardCategorias from './categorias/DashboardCategorias'
import DashboardProductos from './productos/DashboardProducto'
import DashboardUsuarios from './usuarios/DashboardUsuarios'
import Error404 from './Error404'
import Home from './Home'

function Contenido(props){
    return ( 

            <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/usuarios"  component={DashboardUsuarios}/> 
            <Route path="/productos"  component={DashboardProductos}/>    
            <Route path="/categorias"  component={DashboardCategorias}/>
            <Route path="*"  component={Error404}/>   

            </Switch>
    )
}


export default Contenido