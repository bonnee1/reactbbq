import React, { Component } from "react";
<<<<<<< HEAD
=======
import WesternFont from './fonts/fonts';
import { ThemeProvider, }  from 'styled-components';
>>>>>>> eeb5271096d511fc941b7e2bf103646670505f51
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";


class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          
            <div className="App">
             <Main />
            </div>
           
            
        </BrowserRouter> 
      );
  };
}


export default App;
