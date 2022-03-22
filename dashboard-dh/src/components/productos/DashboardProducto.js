import React, { Component } from 'react'
import ProductCard from './ProductCard';

class  DashboardProductos extends Component{
    state = {productos:[]}

    // eslint-disable-next-line no-useless-constructor
    constructor (props){
        super(props)
      
    }

    componentDidMount(){
         fetch('https://supermercado-dh.herokuapp.com/api/products/')
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
           <h3> Bienvenidos a la seccion de productos</h3>
            <section className="products">
               {this.state.productos.length===0? 'Cargando...': 
                 this.state.productos.map((el,id)=> <ProductCard  key={el + id} el = {el} /> )
                }

               </section>
          
            </>

        ) 
    }
}


export default DashboardProductos