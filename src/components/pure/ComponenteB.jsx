import React from 'react';
import PropTypes from 'prop-types';


const ComponenteB = ({contacto}) => {
    return (
        <div>
            <h2>Nombre completo: {contacto.nombre} {contacto.apellido}</h2>
            <h3>Email: {contacto.email}</h3>
            <h4>Contacto: {contacto.conectado ? 'En Línea' : 'No Disponible'}</h4>
        </div>
    );
};


ComponenteB.propTypes = {

};


export default ComponenteB;
