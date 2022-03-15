import React from 'react'

import { Route, Switch} from 'react-router-dom'
import DashboardCategorias from './DashboardCategorias'
import TablaProductos from './productos/TablaProductos'
import DashboardUsuarios from './DashboardUsuarios'
import Error404 from './Error404'
import Home from './Home'

function Contenido(props){
    return ( 

            <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/usuarios"  component={DashboardUsuarios}/> 
            <Route path="/productos"  component={TablaProductos}/>    
            <Route path="/categorias"  component={DashboardCategorias}/>
            <Route path="*"  component={Error404}/>   

            </Switch>
    )
}


export default Contenido