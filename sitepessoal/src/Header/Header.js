import React, { Component } from 'react';
import Eu from './estevam.PNG'
import '../App.css';


class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bar">
                    <img src={Eu} className="d-inline-block align-top picture" alt=""/>
                    <h1>Estevam Alcântara Ponte</h1>
                </nav>
            </div>
        );
    }
}

export default Header;