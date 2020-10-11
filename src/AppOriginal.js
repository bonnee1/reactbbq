import React, { Component } from "react";
import GlobalStyle from './fonts/fonts';
import { ThemeProvider, }  from 'styled-components';
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";


class App extends Component {
  render() {
    return (
      {/* <ThemeProvider theme={{ fontFamily: 'Country Western' }}>  */}
        <BrowserRouter>
          <GlobalStyle />
            <div className="App">
             {/*<Main />*/}Hello World
            </div>
        </BrowserRouter> 
      {/* </ThemeProvider> */}
    );
  };
}


export default App;
