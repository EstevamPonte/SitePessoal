import React, { Component } from 'react';
import Header from './Header/Header'
import './App.css';
import Footer from './Footer/Footer'
import Main from './main/index'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
