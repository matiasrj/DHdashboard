import React from 'react'


function ProductCard({el}){

    let {name, description, price} = el;
    
    return ( 
        
        <div className="product-card">
        <article>
             {/* <img src="/images/Iphone.png" alt="Iphone"> */}
           
             <div className="body-card">
                 <p className="title-card"> {name}</p>
                 <p className="price-card"> u$s {price}</p>
                     
             </div>
             <p className="desc-card"> {description}</p>
         
         </article>
         </div>
    )
}


export default ProductCard