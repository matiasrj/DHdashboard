import React from 'react'


function UserCard({el}){

    let {email, id,firstName} = el;
    
    return ( 
        
        <div className="product-card">
        <article>
             {/* <img src="/images/Iphone.png" alt="Iphone"> */}
           
             <div className="body-card">
                 <p className="title-card">ID User: {id}</p>
                 <p className="price-card">Mail: {email}</p>
                     
             </div>
             <p className="desc-card">Nombre: {firstName}</p>
         
         </article>
         </div>
    )
}


export default UserCard