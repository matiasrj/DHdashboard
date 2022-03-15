import React from 'react'


function ProductCard({el}){

    let {name, description, price} = el;
    
    return ( 
        <tr>
        <td> {name}</td>
        <td> {description}</td>
        <td>{price}</td>
        </tr>
    )
}


export default ProductCard