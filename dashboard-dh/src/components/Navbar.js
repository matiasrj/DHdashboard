import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import DashboardCategorias from './DashboardCategorias'
import DashboardProductos from './DashboardProductos'
import DashboardUsuarios from './DashboardUsuarios'
import Error404 from './Error404'
import Home from './Home'


function Navbar(props){
    return (
            <div>
            <ul>
           {  props.links.map( (link, i) => <Link to={link}  key={link + i}>  {link}</Link> )   } 
            </ul>
            <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/usuarios"  component={DashboardUsuarios}/> 
            <Route path="/productos"  component={DashboardProductos}/>    
            <Route path="/categorias"  component={DashboardCategorias}/>
            <Route path="*"  component={Error404}/>   

            </Switch>


            </div>
    )
}


export default Navbar