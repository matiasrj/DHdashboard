import React, { Component } from 'react'
import UserCard from './UserCard';

class DashboardUsuarios extends Component{

    state = {usuarios:[]}

    // eslint-disable-next-line no-useless-constructor
    constructor (props){
        super(props)
      
    }


    componentDidMount(){
        fetch('http://localhost:3001/api/users')
       .then(response => response.json())
       .then(data => {
           console.log(data)
           this.setState ({usuarios : data.data});
       })
       .catch (e => {console.log (e)});

   }


   render() {
    console.log(this.state.usuarios)
    
    return(
        <>
       <h3> Bienvenidos a la seccion de usuarios</h3>
        <section className="products">
           {this.state.usuarios.length===0? 'Cargando...': 
             this.state.usuarios.map((el,id)=> <UserCard key={el + id} el = {el}/> )
            }

           </section>
      
        </>

    ) 
}
}


export default DashboardUsuarios
