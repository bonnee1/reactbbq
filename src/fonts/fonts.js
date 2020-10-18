import styled, {createGlobalStyle} from 'styled-components';

import CountryWestern from './CountryWestern.woff';
import CountryWestern2 from './CountryWestern2.woff2';



/*const GlobalStyle = createGlobalStyle`
//{@font-face {
    //font-family: 'Country Western';
    src: local('CountryWestern2'), local('CountryWestern'),
    url(${CountryWestern2}) format('woff2'),
    url(${CountryWestern}) format('woff');
    font-weight: 300;
    font-style: normal;
}}*/
const WesternFont = styled.h1`
    font-family: 'Country Western';
    src: local('CountryWestern2'), local('CountryWestern'),
    url(${CountryWestern2}) format('woff2'),
    url(${CountryWestern}) format('woff');
       font-style: normal;
 `



 export default WesternFont;