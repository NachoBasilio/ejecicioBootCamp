import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/ComponenteB';


const ComponenteA = () => {
    const contactoEjeplo = new Contacto("Nacho", "Basilio", "ingacio.n.basilio.b@gmail.com", true)
    return (
        <div>
            <ComponenteB contacto={contactoEjeplo}></ComponenteB>
        </div>
    );
};


ComponenteA.propTypes = {

};


export default ComponenteA;
