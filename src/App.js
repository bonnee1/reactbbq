import React, { Component } from "react";
import GlobalStyles from './fonts/fonts';
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";


class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <GlobalStyles />
          <div className="App">
            <Main />
          </div>
        
      </BrowserRouter>
    );
  };
}

export default App;
