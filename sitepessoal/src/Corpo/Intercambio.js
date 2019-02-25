import React, { Component } from 'react';


class Intercambio extends Component {
    render() {
        return (
            <div>
                <div className="canada"/>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-auto ">
                            <h1 className="title2">Intercâmbio</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-aulto">
                            <p id="pattern">O intercâmbio, sem dúvidas, foi uma das<br/>melhores experiências que eu vivi</p>
                        </div> 
                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-aulto">
                            <p id="pattern">Fui ao Canadá sem saber absolutamente<br/>nada do idioma e da cultura inglesa </p>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-aulto">
                            <p id="pattern">Diante disso tive que me adaptar e sair da minha<br/>zona de conforto ao longo de um ano.</p>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Intercambio;