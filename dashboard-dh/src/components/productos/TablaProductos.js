import React, { Component } from 'react'
import EncabezadoTablaProducto from './EncabezadoTablaProducto';
import ProductCard from './ProductCard';

class  TablaProductos extends Component{
    state = {productos:[]}

    // eslint-disable-next-line no-useless-constructor
    constructor (props){
        super(props)
      
    }

    componentDidMount(){
         fetch('http://localhost:3001/api/products/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState ({productos : data.data.productos});
        })
        .catch (e => {console.log (e)});

    }
    
    render() {
        console.log(this.state.productos)
        
        return(
            <>
            <table>
                <EncabezadoTablaProducto/>

               {this.state.productos.length===0? 'Cargando...': 
                 this.state.productos.map((el,id)=> <ProductCard  key={el + id} el = {el} /> )
                }
               
            </table>
            </>

        ) 
    }
}


export default TablaProductos