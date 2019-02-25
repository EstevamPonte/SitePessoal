import React, { Component } from 'react';


class Atualmente extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <h1 className="title2">Atualmente</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-aulto">
                        <p id="pattern">Em suma, atualmente estou cursando o 5° de<br/>sistemas de informação no centro universitário 7 de setembro</p>
                    </div> 
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-aulto">
                        <p id="pattern">Estagiando no Núcleo de Desenvolvimento de Sistemas de Informação (DESI)<br/>no qual desenvolvemos aplicações web utilizando HTML, CSS,<br/>JavaScript, React e outras tecnologias de desenvolvimento</p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-aulto">
                        <p id="pattern">Além de utilizarmos o WordPress para manutenção do site da UNI7.</p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Atualmente;