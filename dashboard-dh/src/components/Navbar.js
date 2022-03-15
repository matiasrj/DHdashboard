import React from 'react'

import {Link} from 'react-router-dom'

function Navbar(props){
    return (
            <div>
            <ul>
           {  props.links.map( (link, i) => <Link to={link}  key={link + i}>  {link}</Link> )   } 
            </ul>



            </div>
    )
}


export default Navbar