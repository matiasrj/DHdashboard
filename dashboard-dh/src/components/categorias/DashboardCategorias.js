import React, { Component } from 'react'
import CategoryCard from './CategoryCard';

class DashboardCategorias extends Component{

    state = {categorias:[]}

    // eslint-disable-next-line no-useless-constructor
    constructor (props){
        super(props)
      
    }


    componentDidMount(){
        fetch('https://supermercado-dh.herokuapp.com/api/category')
       .then(response => response.json())
       .then(data => {
           console.log(data)
           this.setState ({categorias : data.data.categories});
       })
       .catch (e => {console.log (e)});

   }


   render() {
    console.log(this.state.categorias)
    
    return(
        <>
       <h3> Bienvenidos a la seccion de categorias</h3>
        <section className="products">
           {this.state.categorias.length===0? 'Cargando...': 
             this.state.categorias.map((el,id)=> <CategoryCard key={el + id} el = {el}/> )
            }

           </section>
      
        </>

    ) 
}
}


export default DashboardCategorias
