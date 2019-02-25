import React, { Component } from 'react';
import '../App.css'
class ComoComecou extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <h1 className="title2">Como começou</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-aulto">
                        <p id="pattern">Quando eu era criança, sempre gostava de desmontar<br/>qualquer coisas que via para descobri como elas funcionavam</p>
                    </div> 
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-aulto">
                        <p id="pattern">Mas logicamente não era desmontando da maneira mais<br/>delicada e sim brutal mesmo, ou seja, quebrando mesmo</p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-aulto">
                        <p id="pattern">E ao longo do tempo fui observando as coisas de forma<br/>mais técnica de como elas funcionam.</p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default ComoComecou;