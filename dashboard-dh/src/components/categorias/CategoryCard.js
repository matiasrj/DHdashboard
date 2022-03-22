import React from 'react'


function CategoryCard({el}){

    let {name, id,createdAt} = el;
    
    return ( 
        
        <div className="product-card">
        <article>
             {/* <img src="/images/Iphone.png" alt="Iphone"> */}
           
             <div className="body-card">
                 <p className="title-card">ID : {id}</p>
                 <p className="price-card">Categoria: {name}</p>
                     
             </div>
             <p className="desc-card">Creado: {createdAt}</p>
         
         </article>
         </div>
    )
}


export default CategoryCard