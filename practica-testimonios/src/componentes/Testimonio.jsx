import React from 'react';  
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
    return (
        <div className = 'contenedor-testimonio'>
            <img
            className ='img-testimonio'
            src = {require(`../img/testimonio-${props.imagen}.png`)}
            alt ={`Imagen de ${props.nombre}`} />

            <div className ='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>
                    {props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: props.testimonio }} />                
            </div>
        </div>
    );
}

export default Testimonio;