import React, { Component } from 'react';
import ComoComecou from '../Corpo/ComoComecou'
import Intercambio from '../Corpo/Intercambio';
import DeVoltaAoBrasil from '../Corpo/DeVoltaAoBrasil';
import Atualmente from '../Corpo/Atualmente';


class Index extends Component {
    render() {
        return (
            <div>
                <ComoComecou/>
                <Intercambio/>
                <DeVoltaAoBrasil/>
                <Atualmente/>
            </div>
        );
    }
}

export default Index;