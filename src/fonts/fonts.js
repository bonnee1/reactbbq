 import { createGlobalStyle } from 'styled-components';


 export default createGlobalStyle`
    @font-face {
        font-family: 'Country Western';
        src: local('Country Western'), local('CountryWestern'),
        url(${CountryWesternWoff2}) format('woff2'),
        url(${CountryWesternWoff}) forma('woff'),
        font-weight: 300;
        font-style: normal;
   }
    `;
    