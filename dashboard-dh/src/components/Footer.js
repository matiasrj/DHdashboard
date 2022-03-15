import React from 'react'

function Footer(props){

    return (
        <footer>
            <section className="sec-items"> 
                <article>
                    <ul>
                        <li><a href="#/atencion-cliente">Atención al cliente</a> </li>
                        <li><a href="#/preguntas-frecuentes">Preguntas Frecuentes</a> </li>
                        <li><a href="#/locales"> Nuestros Locales</a> </li>
                    </ul>
                </article>
                
                
                <article>
                    <ul>
                        <li> <button className="baja-newsletter"> Baja Newsletter</button></li>
                        <li><a href="#/trabaja-nosotros">Trabajá con Nosotros</a> </li>
                        <li><a href="#/terminos-condiciones">Términos y condiciones</a> </li>
                </ul>
            </article>
            
            
            
            <article>
                <h3> Síguenos!</h3>
                <ul className="redes">
                    <li><a href="#/whatsapp"><i className="fab fa-whatsapp"></i>  </a> </li>
                    <li><a href="#/facebook"><i className="fab fa-facebook"></i>  </a> </li>
                    <li><a href="#/instagram"><i className="fab fa-instagram"></i> </a> </li>
                </ul>
            </article>
            
        </section>

        <article className="copyright">
            Derechos reservados - 20XX
        </article>
        
    </footer>  
    )

}

export default Footer